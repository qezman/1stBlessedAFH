import { useEffect } from 'react';
import { GalleryPhoto } from '../../data/galleryPhotos';

interface LightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const NavBtn = ({ label, onClick, children, position }: {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  position: 'left' | 'right';
}) => (
  <button
    className={`fixed top-1/2 -translate-y-1/2 ${position}-6 bg-white/10 hover:bg-white/20 border border-white/15 w-12 h-12 flex items-center justify-center text-white transition-colors z-[1001]`}
    onClick={onClick}
    aria-label={label}
  >
    {children}
  </button>
);

export function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 bg-[#070e1a]/80 backdrop-blur-md z-[1000] flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 border border-white/15 w-10 h-10 flex items-center justify-center text-white transition-colors z-[1001]"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <NavBtn label="Previous photo" position="left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9L11 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavBtn>

      <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.caption}
          className="max-w-[52vw] max-h-[72vh] shadow-2xl object-contain animate-in zoom-in-95 duration-200"
        />
      </div>

      <NavBtn label="Next photo" position="right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4L12 9L7 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavBtn>

      {photo.caption && (
        <div className="fixed bottom-14 left-1/2 -translate-x-1/2 text-sm font-light text-white/75 tracking-wide text-center z-[1001] whitespace-nowrap bg-black/50 px-4 py-1.5 backdrop-blur-sm">
          {photo.caption}
        </div>
      )}

      <div className="fixed bottom-7 left-1/2 -translate-x-1/2 text-xs font-light text-white/50 tracking-widest uppercase z-[1001]">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}

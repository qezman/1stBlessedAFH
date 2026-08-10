import React from "react";

interface SectionDividerProps {
  fillColor?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  fillColor = "fill-navy-950",
  className = "",
}) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 48V24C360 0 720 48 1080 24C1260 12 1380 48 1440 48H0Z"
          className={fillColor}
        />
      </svg>
    </div>
  );
};

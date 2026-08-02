export interface GalleryPhoto {
  id: number;
  caption: string;
  src: string;
  height: string; // Masonry height variation (e.g. 280px, 360px, 240px)
  category?: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    caption: "Living room — warm and welcoming",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    height: "320px",
    category: "Living"
  },
  {
    id: 2,
    caption: "Dining area — home-cooked meals daily",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    height: "240px",
    category: "Dining"
  },
  {
    id: 3,
    caption: "Garden — peaceful outdoor space",
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    height: "400px",
    category: "Outdoors"
  },
  {
    id: 4,
    caption: "Private bedroom — furnished and cozy",
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    height: "280px",
    category: "Bedrooms"
  },
  {
    id: 5,
    caption: "Common lounge — space to socialize",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    height: "360px",
    category: "Living"
  },
  {
    id: 6,
    caption: "Kitchen — where meals are made with love",
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    height: "260px",
    category: "Kitchen"
  },
  {
    id: 7,
    caption: "Front entrance — welcoming neighborhood",
    src: "https://framerusercontent.com/assets/NAzYO2o1MS3dK9Xa3ksU5oCAREU.jpg",
    height: "300px",
    category: "Exterior"
  },
  {
    id: 8,
    caption: "Activity corner — keeping minds active",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    height: "220px",
    category: "Activities"
  },
  {
    id: 9,
    caption: "Backyard patio — evening sunsets",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    height: "380px",
    category: "Outdoors"
  },
  {
    id: 10,
    caption: "Hallway — bright and accessible",
    src: "https://framerusercontent.com/assets/xkjm8YFt86QMxl6KrvoqMGtrSI0.jpg",
    height: "250px",
    category: "Interior"
  },
  {
    id: 11,
    caption: "Second bedroom — quiet and private",
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    height: "340px",
    category: "Bedrooms"
  },
  {
    id: 12,
    caption: "Morning light in the living room",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    height: "290px",
    category: "Living"
  },
  {
    id: 13,
    caption: "Caregiver and resident moment",
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    height: "360px",
    category: "Care"
  },
  {
    id: 14,
    caption: "Home exterior — Rockefeller Ave",
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    height: "270px",
    category: "Exterior"
  },
  {
    id: 15,
    caption: "Evening gathering in the lounge",
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    height: "310px",
    category: "Living"
  }
];

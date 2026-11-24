import photo01 from "@/assets/photo-01.jpg.asset.json";
import photo02 from "@/assets/photo-02.jpg.asset.json";
import photo03 from "@/assets/photo-03.jpg.asset.json";
import photo04 from "@/assets/photo-04.jpg.asset.json";
import photo05 from "@/assets/photo-05.jpg.asset.json";
import photo06 from "@/assets/photo-06.jpg.asset.json";
import photo07 from "@/assets/photo-07.jpg.asset.json";
import photo08 from "@/assets/photo-08.jpg.asset.json";
import photo09 from "@/assets/photo-09.jpg.asset.json";
import photo10 from "@/assets/photo-10.jpg.asset.json";
import photo11 from "@/assets/photo-11.jpg.asset.json";
import photo12 from "@/assets/photo-12.jpg.asset.json";
import photo13 from "@/assets/photo-13.jpg.asset.json";
import photo14 from "@/assets/photo-14.jpg.asset.json";
import photo15 from "@/assets/photo-15.jpg.asset.json";
import photo16 from "@/assets/photo-16.jpg.asset.json";
import photo17 from "@/assets/photo-17.jpg.asset.json";
import photo18 from "@/assets/photo-18.jpg.asset.json";
import photo19 from "@/assets/photo-19.jpg.asset.json";

export const PHOTO_URLS = [
  photo01.url,
  photo02.url,
  photo03.url,
  photo04.url,
  photo05.url,
  photo06.url,
  photo07.url,
  photo08.url,
  photo09.url,
  photo10.url,
  photo11.url,
  photo12.url,
  photo13.url,
  photo14.url,
  photo15.url,
  photo16.url,
  photo17.url,
  photo18.url,
  photo19.url,
] as const;

export const HERO_SLIDES = [0, 3, 9, 8, 6, 2] as const;
export const WHATSAPP_NUMBER = "27790997559";
export const BUSINESS_NAME = "TM Tiling Specialists";

export const WHATSAPP_MESSAGES = {
  general:
    "Hello TM Tiling Specialists. I found your website and would like to enquire about your renovation services.",
  quotation:
    "Hello TM Tiling Specialists. I would like to request a quotation for a renovation project in Cape Town.",
} as const;

export function photoUrl(index: number): string {
  return PHOTO_URLS[index] ?? PHOTO_URLS[0] ?? "";
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  name: string;
  description: string;
  benefit: string;
  photoIndex: number | null;
  illustrative: boolean;
  enquiry: string;
};

export const SERVICES: Service[] = [
  {
    name: "Wall & floor tiling",
    description: "Flawless tiling for floors and walls.",
    benefit: "Lasting, easy-to-clean surfaces.",
    photoIndex: 9,
    illustrative: false,
    enquiry: "I am interested in your tiling services. Could you please assist me with a quotation?",
  },
  {
    name: "Bathroom renovations",
    description: "Complete bathroom transformations.",
    benefit: "A space you’ll enjoy every day.",
    photoIndex: 0,
    illustrative: false,
    enquiry: "I am interested in a bathroom renovation and would like to request a quotation.",
  },
  {
    name: "Kitchen renovations",
    description: "Splashbacks, tiling and kitchen updates.",
    benefit: "A kitchen that works and looks great.",
    photoIndex: 6,
    illustrative: false,
    enquiry: "I am interested in a kitchen renovation and would like to request a quotation.",
  },
  {
    name: "Painting",
    description: "Interior and exterior painting.",
    benefit: "A fresh finish that protects your home.",
    photoIndex: 18,
    illustrative: true,
    enquiry: "I am interested in painting services and would like a quotation.",
  },
  {
    name: "Vinyl flooring",
    description: "Modern, durable vinyl floors.",
    benefit: "Affordable and comfortable underfoot.",
    photoIndex: 17,
    illustrative: true,
    enquiry: "I am interested in vinyl flooring and would like a quotation.",
  },
  {
    name: "Wooden flooring",
    description: "Warm, timeless wooden floors.",
    benefit: "Adds lasting value to your home.",
    photoIndex: 16,
    illustrative: true,
    enquiry: "I am interested in wooden flooring and would like a quotation.",
  },
  {
    name: "Ceiling installations",
    description: "Neat, modern ceilings.",
    benefit: "A clean, finished look overhead.",
    photoIndex: 15,
    illustrative: true,
    enquiry: "I am interested in ceiling installations and would like a quotation.",
  },
  {
    name: "Building & construction",
    description: "Alterations, extensions and repairs.",
    benefit: "One reliable team for the build.",
    photoIndex: 3,
    illustrative: false,
    enquiry: "I am interested in building and construction work and would like a quotation.",
  },
  {
    name: "Plumbing",
    description: "Professional plumbing for renovations.",
    benefit: "Fixtures installed properly the first time.",
    photoIndex: 14,
    illustrative: true,
    enquiry: "I am interested in plumbing services and would like a quotation.",
  },
  {
    name: "Paving",
    description: "Patterned driveways and patios.",
    benefit: "Durable, great-looking outdoor areas.",
    photoIndex: 2,
    illustrative: false,
    enquiry: "I am interested in paving and would like a quotation.",
  },
  {
    name: "Air conditioning",
    description: "Air conditioning installations.",
    benefit: "Year-round comfort at home.",
    photoIndex: 13,
    illustrative: true,
    enquiry: "I am interested in air conditioning installation and would like a quotation.",
  },
  {
    name: "Concrete & epoxy flooring",
    description: "Seamless, hard-wearing floors.",
    benefit: "Strong, modern and easy to maintain.",
    photoIndex: 11,
    illustrative: true,
    enquiry: "I am interested in concrete or epoxy flooring and would like a quotation.",
  },
  {
    name: "Waterproofing",
    description: "Protection against leaks and damp.",
    benefit: "Safeguards your property and investment.",
    photoIndex: null,
    illustrative: false,
    enquiry: "I am interested in waterproofing and would like a quotation.",
  },
];

export type GalleryPhoto = {
  photoIndex: number;
  category: string;
  label: string;
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { photoIndex: 0, category: "Bathrooms", label: "Bathroom" },
  { photoIndex: 1, category: "Bathrooms", label: "Walk-in shower" },
  { photoIndex: 5, category: "Bathrooms", label: "Shower niche" },
  { photoIndex: 9, category: "Tiling", label: "Floor tiling" },
  { photoIndex: 6, category: "Tiling", label: "Feature wall tiling" },
  { photoIndex: 3, category: "Walls & Cladding", label: "Stone cladding" },
  { photoIndex: 2, category: "Paving & Outdoor", label: "Paving" },
  { photoIndex: 4, category: "Paving & Outdoor", label: "Pool surround" },
  { photoIndex: 10, category: "Paving & Outdoor", label: "Pool area" },
  { photoIndex: 8, category: "Paving & Outdoor", label: "Pool & garden" },
  { photoIndex: 7, category: "Paving & Outdoor", label: "Artificial grass" },
  { photoIndex: 11, category: "Project Inspiration", label: "Epoxy flooring" },
  { photoIndex: 12, category: "Project Inspiration", label: "Metallic epoxy floor" },
  { photoIndex: 16, category: "Project Inspiration", label: "Timber flooring" },
  { photoIndex: 17, category: "Project Inspiration", label: "Vinyl flooring" },
  { photoIndex: 15, category: "Project Inspiration", label: "Ceiling installation" },
  { photoIndex: 18, category: "Project Inspiration", label: "Exterior painting" },
  { photoIndex: 13, category: "Project Inspiration", label: "Air conditioning" },
  { photoIndex: 14, category: "Project Inspiration", label: "Plumbing" },
];

export const GALLERY_CATEGORIES = [
  "All",
  ...new Set(GALLERY_PHOTOS.map((photo) => photo.category)),
];

export type QuoteDetails = {
  name: string;
  service: string;
  location: string;
  contactNumber: string;
  description: string;
};

export function buildQuoteMessage(details: QuoteDetails): string {
  return `Hello TM Tiling Specialists. My name is ${details.name}.\nService: ${details.service}\nLocation: ${details.location}\nContact number: ${details.contactNumber}${details.description ? `\nProject: ${details.description}` : ""}`;
}
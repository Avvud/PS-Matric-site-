export const SCHOOL_NAME = "PS Matriculation Higher Secondary School";
export const SCHOOL_SHORT = "PS Matric";
export const SCHOOL_TAGLINE = "P.S.EDUCATIONAL SOCIETY";

export type NavItem = {
  label: string;
  to: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about/managing-committee",
    children: [
      { label: "Managing Committee", to: "/about/managing-committee" },
      { label: "History", to: "/about/history" },
      { label: "Facilities", to: "/about/facilities" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions/uniform",
    children: [
      { label: "School Uniform Details", to: "/admissions/uniform" },
      { label: "School Fee", to: "/admissions/fee" },
      { label: "General Instructions", to: "/admissions/portal" },
    ],
  },
  {
    label: "Academic Curriculum",
    to: "/academics/curriculum",
    children: [
      { label: "Curriculum", to: "/academics/curriculum" },
      { label: "Activity Schedule", to: "/academics/activity-schedule" },
      { label: "Examination", to: "/academics/examination" },
    ],
  },
  {
    label: "Events",
    to: "/events/akshara-abhyas",
    children: [
      { label: "Akshara Abhyas", to: "/events/akshara-abhyas" },
      { label: "Vidhya Pravesh", to: "/events/vidhya-pravesh" },
      { label: "Sports Day", to: "/events/sports-day" },
      { label: "Annual Day", to: "/events/annual-day" },
      { label: "Independence Day", to: "/events/independence-day" },
      { label: "Project Day", to: "/events/project-day" },
      { label: "Fancy Dress", to: "/events/fancy-dress" },
      { label: "Republic Day", to: "/events/republic-day" },
      { label: "Primary Sports Day", to: "/events/primary-sports-day" },
      { label: "Primary Annual Day", to: "/events/primary-annual-day" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const EVENT_GALLERY_YEARS = ["2025-26", "2026-27"] as const;
type EventGalleryYearName = (typeof EVENT_GALLERY_YEARS)[number];

type EventGalleryYear = {
  folderUrl: string;
  photos: string[];
};

function createEventGallery(
  slug: string,
  photos: Partial<Record<EventGalleryYearName, string[]>> = {},
): Record<EventGalleryYearName, EventGalleryYear> {
  return {
    "2025-26": {
      folderUrl: `/images/events/${slug}/2025-26/`,
      photos: photos["2025-26"] ?? [],
    },
    "2026-27": {
      folderUrl: `/images/events/${slug}/2026-27/`,
      photos: photos["2026-27"] ?? [],
    },
  };
}

export const EVENT_GALLERIES = {
  "akshara-abhyas": { title: "Akshara Abhyas", years: createEventGallery("akshara-abhyas") },
  "vidhya-pravesh": { title: "Vidhya Pravesh", years: createEventGallery("vidhya-pravesh") },
  "sports-day": { title: "Sports Day", years: createEventGallery("sports-day") },
  "annual-day": { title: "Annual Day", years: createEventGallery("annual-day") },
  "independence-day": { title: "Independence Day", years: createEventGallery("independence-day") },
  "project-day": { title: "Project Day", years: createEventGallery("project-day") },
  "fancy-dress": { title: "Fancy Dress", years: createEventGallery("fancy-dress") },
  "republic-day": { title: "Republic Day", years: createEventGallery("republic-day") },
  "primary-sports-day": {
    title: "Primary Sports Day",
    years: createEventGallery("primary-sports-day"),
  },
  "primary-annual-day": {
    title: "Primary Annual Day",
    years: createEventGallery("primary-annual-day"),
  },
};

export const CONTACT = {
  address: "# PS Matriculation School",
  phone: "044-246-42133",
  admissions: "admissions@psmatric.in",
  careers: "career_psmatric@gmail.com",
  info: "info@psmatric.in",
};

/**
 * IMAGE PATHS — upload your photos to `public/images/...` using these exact names.
 */
export const IMAGES = {
  logo: "/images/logo.jpeg",
  bro: "/images/bro.jpeg",
  hero: [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.jpg",
    "/images/hero/hero-4.jpeg",
  ],
  principal: "/images/principal.jpeg",
  correspondent: "/images/correspondent.jpeg",
  uniform: {
    lkgUkg: "/images/uniform/kg unifrom.png",
    primary: "/images/uniform/primary uniform.png",
    secondary: "/images/uniform/Secondary.jpeg",
  },
  gallery: [
    { src: "/images/gallery/gallery-1.png", caption: "Annual Day" },
    { src: "/images/gallery/gallery-2.png", caption: "Science Lab" },
    { src: "/images/gallery/gallery-3.png", caption: "Sports Meet" },
    { src: "/images/gallery/gallery-4.png", caption: "Classrooms" },
    { src: "/images/gallery/gallery-5.jpg", caption: "Cultural Programme" },
    { src: "/images/gallery/gallery-6.jpg", caption: "Library" },
    { src: "/images/gallery/gallery-7.jpg", caption: "Campus" },
    { src: "/images/gallery/gallery-8.jpg", caption: "Student Clubs" },
  ],
  alumni: [
    "/images/alumni/alumni-1.jpg",
    "/images/alumni/alumni-2.jpg",
    "/images/alumni/alumni-3.jpg",
  ],
  about: "/images/about-campus.jpeg",
  banner: "/images/page-banner.jpeg",
};

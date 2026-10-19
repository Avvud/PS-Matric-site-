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
      { label: "Project Day", to: "/events/project-day" },
      { label: "Sports Day", to: "/events/sports-day" },
      { label: "Independence Day", to: "/events/independence-day" },
      { label: "Annual Day", to: "/events/annual-day" },
      { label: "Fancy Dress", to: "/events/fancy-dress" },
      { label: "Republic Day", to: "/events/republic-day" },
      { label: "Primary Annual Day", to: "/events/primary-annual-day" },
      { label: "Primary Sports Day", to: "/events/primary-sports-day" },
    ],
  },
  { label: "Contact", to: "/contact" },
  { label: "Alumni Connect", to: "/alumni-connect" },
];

export const CONTACT = {
  address:
    "P.S. Matriculation Higher Secondary School, No.214, R.K. Mutt Road, Mylapore, Chennai - 600004",
  phone: "044-246-42133",
  email: "psmatric2010@gmail.com",
};

// Each page can use its own banner. Replace the files under public/images/banners/,
// or change a page's path here to use a different filename.
export const PAGE_BANNER_IMAGES: Record<string, string> = {
  "/about/advisory-board": "/images/banners/about/advisory-board.jpg",
  "/about/facilities": "/images/banners/about/facilities.jpeg",
  "/about/founders-vision": "/images/banners/about/founders-vision.jpg",
  "/about/history": "/images/banners/about/classroom.jpg",
  "/about/managing-committee": "/images/banners/about/classroom.jpg",
  "/about/principals-message": "/images/banners/about/principals-message.jpg",
  "/about/testimonials": "/images/banners/about/testimonials.jpg",
  "/about/vision-mission": "/images/banners/about/vision-mission.jpg",
  "/admissions/faqs": "/images/banners/admissions/faqs.jpg",
  "/admissions/fee": "/images/banners/admissions/fee.jpg",
  "/admissions/online-registration": "/images/banners/admissions/online-registration.jpg",
  "/admissions/portal": "/images/banners/admissions/portal.jpg",
  "/admissions/uniform": "/images/banners/admissions/uniform.jpg",
  "/academics/activity-schedule": "/images/banners/academics/activity-schedule.jpg",
  "/academics/curriculum": "/images/banners/academics/curriculum.jpg",
  "/academics/examination": "/images/banners/academics/exam.jpg",
  "/academics/method-of-evaluation": "/images/banners/academics/method-of-evaluation.jpg",
  "/academics/online-learning": "/images/banners/academics/online-learning.jpg",
  "/academics/student-resource-corner": "/images/banners/academics/student-resource-corner.jpg",
  "/academics/syllabus": "/images/banners/academics/syllabus.jpeg",
  "/academics/teaching-methodology": "/images/banners/academics/teaching-methodology.jpg",
  "/academics/timetable": "/images/banners/academics/timetable.jpg",
  "/alumni-connect": "/images/banners/about/classroom.jpeg",
  "/contact": "/images/banners/contact.png",
  "/life/achievements": "/images/banners/life/achievements.jpg",
  "/life/gallery": "/images/banners/life/gallery.jpg",
  "/life/infrastructure": "/images/banners/life/infrastructure.jpg",
  "/life/student-clubs": "/images/banners/life/student-clubs.jpg",
  "/mandatory-disclosure": "/images/banners/mandatory-disclosure.jpg",
  "/events/akshara-abhyas": "/images/banners/events/akshara-abhyas.JPG",
  "/events/annual-day": "/images/banners/events/annual-day.JPG",
  "/events/fancy-dress": "/images/events/fancy-dress/2025-26/optimized/1.webp",
  "/events/independence-day": "/images/banners/events/independence-day.JPG",
  "/events/primary-annual-day": "/images/events/primary-annual-day/2025-26/optimized/RSMV1509.webp",
  "/events/primary-sports-day": "/images/events/primary-sports-day/2025-26/optimized/RSMV2330.webp",
  "/events/project-day": "/images/banners/events/project-day.JPG",
  "/events/republic-day": "/images/events/republic-day/2025-26/optimized/RSMV0418%20-%20Copy.webp",
  "/events/sports-day": "/images/banners/events/sports-day.JPG",
  "/events/vidhya-pravesh": "/images/banners/events/vidhya-pravesh.jpeg",
};

/**
 * IMAGE PATHS — upload your photos to `public/images/...` using these exact names.
 */
export const IMAGES = {
  logo: "/images/logo.webp",
  founderlogo: "/images/founderlogo.webp",
  hero: [
    "/images/hero/hero-1.webp",
    "/images/hero/hero-2.webp",
    "/images/hero/hero-3.webp",
    "/images/hero/hero-4.webp",
  ],
  principal: "/images/principal.webp",
  correspondent: "/images/correspondent.webp",
  uniform: {
    lkgUkg: "/images/uniform/kg unifrom.webp",
    primary: "/images/uniform/primary uniform.webp",
    secondary: "/images/uniform/Secondary.webp",
  },
  gallery: [
    { src: "/images/gallery/gallery-1.webp", caption: "Annual Day" },
    { src: "/images/gallery/gallery-2.webp", caption: "Science Lab" },
    { src: "/images/gallery/gallery-3.webp", caption: "Sports Meet" },
    { src: "/images/gallery/gallery-4.webp", caption: "Classrooms" },
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
  about: "/images/about-campus.webp",
  banner: "/images/page-banner.webp",
};

export function getPageBannerImage(pathname: string): string {
  const eventPath = pathname.split("/").slice(0, 3).join("/");
  return PAGE_BANNER_IMAGES[pathname] ?? PAGE_BANNER_IMAGES[eventPath] ?? IMAGES.banner;
}

export function getOptimizedBannerImage(imagePath: string): string {
  return imagePath.replace(/\.[^.]+$/, ".webp");
}

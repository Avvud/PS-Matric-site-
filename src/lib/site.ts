export const SCHOOL_NAME = "PS Matriculation Higher Secondary School";
export const SCHOOL_SHORT = "PS Matric";
export const SCHOOL_TAGLINE = "P.S.EDUCATIONAL SOCIETY";

export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about/vision-mission",
    children: [
      { label: "Vision & Mission", to: "/about/vision-mission" },
      { label: "History", to: "/about/history" },
      { label: "Principal's Message", to: "/about/principals-message" },
      { label: "Founders Vision", to: "/about/founders-vision" },
      { label: "Advisory Board", to: "/about/advisory-board" },
      { label: "Testimonials", to: "/about/testimonials" },
    ],
  },
  {
    label: "Academics",
    to: "/academics/curriculum",
    children: [
      { label: "Curriculum", to: "/academics/curriculum" },
      { label: "Teaching Methodology", to: "/academics/teaching-methodology" },
      { label: "Method of Evaluation", to: "/academics/method-of-evaluation" },
      { label: "Online Learning", to: "/academics/online-learning" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions/online-registration",
    children: [
      { label: "Online Registration", to: "/admissions/online-registration" },
      { label: "FAQs", to: "/admissions/faqs" },
    ],
  },
  {
    label: "Life at PS Matric",
    to: "/life/infrastructure",
    children: [
      { label: "Infrastructure", to: "/life/infrastructure" },
      { label: "Student Clubs", to: "/life/student-clubs" },
      { label: "Achievements", to: "/life/achievements" },
      { label: "Gallery", to: "/life/gallery" },
    ],
  },
  { label: "Alumni Connect", to: "/alumni-connect" },
  { label: "Contact", to: "/contact" },
];

export const CONTACT = {
  address: "PS Matriculation Higher Secondary School, Chennai, Tamil Nadu, India",
  phone: "+91 00000 00000",
  admissions: "admissions@psmatric.in",
  careers: "careers@psmatric.in",
  info: "info@psmatric.in",
};

/**
 * IMAGE PATHS — upload your photos to `public/images/...` using these exact names.
 */
export const IMAGES = {
  logo: "/images/logo.jpeg",
  hero: [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg",
    "/images/hero/hero-4.jpg",
  ],
  principal: "/images/principal.jpeg",
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
  about: "/images/about-campus.jpg",
  banner: "/images/page-banner.jpeg",
};

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
  imageNames: Partial<Record<EventGalleryYearName, string[]>> = {},
  imageFolder = slug,
): Record<EventGalleryYearName, EventGalleryYear> {
  const createYear = (year: EventGalleryYearName): EventGalleryYear => {
    const folderUrl = `/images/events/${imageFolder}/${year}/`;
    return {
      folderUrl,
      photos: (imageNames[year] ?? []).map((imageName) => `${folderUrl}${imageName}`),
    };
  };

  return {
    "2025-26": createYear("2025-26"),
    "2026-27": createYear("2026-27"),
  };
}

// To add photos, copy them into public/images/events/<event>/<year>/,
// then add just their filenames to the matching year list below.
export const EVENT_GALLERIES = {
  "akshara-abhyas": {
    title: "Akshara Abhyas",
    years: createEventGallery("akshara-abhyas", {
      "2025-26": ["1.jpg"],
      "2026-27": [
        "RSMV6578.JPG",
        "RSMV6582.JPG",
        "RSMV6583.JPG",
        "RSMV6586.JPG",
        "RSMV6594.JPG",
        "RSMV6604.JPG",
        "RSMV6605.JPG",
        "RSMV6608.JPG",
        "RSMV6614.JPG",
        "RSMV6615.JPG",
        "RSMV6628.JPG",
        "RSMV6637.JPG",
      ],
    }),
  },
  "vidhya-pravesh": {
    title: "Vidhya Pravesh",
    years: createEventGallery("vidhya-pravesh", {
      "2026-27": [
        "WhatsApp Image 2026-07-08 at 11.17.57 AM (1).jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.57 AM.jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.58 AM (1).jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.58 AM (2).jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.58 AM.jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.59 AM (1).jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.59 AM (2).jpeg",
        "WhatsApp Image 2026-07-08 at 11.17.59 AM.jpeg",
      ],
    }),
  },
  "sports-day": {
    title: "Sports Day",
    years: createEventGallery(
      "sports-day",
      {
        "2025-26": ["1.jpg"],
        "2026-27": [
          "RSMV2086.JPG",
          "RSMV2114.JPG",
          "RSMV2129.JPG",
          "RSMV2152.JPG",
          "RSMV2160.JPG",
          "RSMV2163.JPG",
          "RSMV2166.JPG",
          "RSMV2172.JPG",
          "RSMV2175.JPG",
          "RSMV2179.JPG",
          "RSMV2180.JPG",
          "RSMV2187.JPG",
          "RSMV2189.JPG",
          "RSMV2190.JPG",
          "RSMV2191.JPG",
          "RSMV2197.JPG",
          "RSMV2201.JPG",
          "RSMV2204.JPG",
          "RSMV2217.JPG",
          "RSMV2223.JPG",
          "RSMV2226.JPG",
          "RSMV2230.JPG",
          "RSMV2233.JPG",
          "RSMV2235.JPG",
          "RSMV2258.JPG",
          "RSMV2277.JPG",
          "RSMV2281.JPG",
          "RSMV2292.JPG",
          "RSMV2295.JPG",
          "RSMV2296.JPG",
          "RSMV2298.JPG",
          "RSMV2301.JPG",
          "RSMV2321.JPG",
          "RSMV2322.JPG",
          "RSMV2326.JPG",
          "RSMV2345.JPG",
          "RSMV2346.JPG",
          "RSMV2350.JPG",
          "RSMV2354.JPG",
          "RSMV2372.JPG",
          "RSMV2381.JPG",
          "RSMV2403.JPG",
          "RSMV2418.JPG",
          "RSMV2419.JPG",
          "RSMV2422.JPG",
          "RSMV2436.JPG",
          "RSMV2437.JPG",
          "RSMV2444.JPG",
          "RSMV2445.JPG",
          "RSMV2449.JPG",
          "RSMV2450.JPG",
          "RSMV2456.JPG",
          "RSMV2468.JPG",
        ],
      },
      "sports-meet",
    ),
  },
  "annual-day": {
    title: "Annual Day",
    years: createEventGallery("annual-day", {
      "2025-26": ["1.jpg", "2.jpg"],
      "2026-27": [
        "RSMV3811.JPG",
        "RSMV3812.JPG",
        "RSMV3825.JPG",
        "RSMV3831.JPG",
        "RSMV3841.JPG",
        "RSMV3854.JPG",
        "RSMV3861.JPG",
        "RSMV3871.JPG",
        "RSMV3879.JPG",
        "RSMV3887.JPG",
        "RSMV3891.JPG",
        "RSMV3893.JPG",
        "RSMV3901.JPG",
        "RSMV3913.JPG",
        "RSMV3917.JPG",
        "RSMV3926.JPG",
        "RSMV3944.JPG",
        "RSMV3947.JPG",
        "RSMV3954.JPG",
        "RSMV3964.JPG",
        "RSMV3966.JPG",
        "RSMV3969.JPG",
        "RSMV3973.JPG",
        "RSMV3979.JPG",
        "RSMV3983.JPG",
        "RSMV3985.JPG",
        "RSMV4014.JPG",
        "RSMV4044.JPG",
        "RSMV4064.JPG",
        "RSMV4071.JPG",
        "RSMV4072.JPG",
        "RSMV4073.JPG",
      ],
    }),
  },
  "independence-day": {
    title: "Independence Day",
    years: createEventGallery("independence-day", {
      "2025-26": ["1.jpg"],
      "2026-27": [
        "RSMV2839.JPG",
        "RSMV2843.JPG",
        "RSMV2846.JPG",
        "RSMV2855.JPG",
        "RSMV2856.JPG",
        "RSMV2859.JPG",
        "RSMV2861.JPG",
        "RSMV2870.JPG",
        "RSMV2873.JPG",
        "RSMV2877.JPG",
        "RSMV2880.JPG",
        "RSMV2882.JPG",
        "RSMV2890.JPG",
        "RSMV2902.JPG",
        "RSMV2905.JPG",
        "RSMV2911.JPG",
        "RSMV2920.JPG",
        "RSMV2921.JPG",
        "RSMV2923.JPG",
        "RSMV2924.JPG",
        "RSMV2927.JPG",
        "RSMV2930.JPG",
        "RSMV2931.JPG",
        "RSMV2934.JPG",
        "RSMV2940.JPG",
        "RSMV2943.JPG",
        "RSMV2946.JPG",
        "RSMV2967.JPG",
        "RSMV2968.JPG",
        "RSMV2973.JPG",
        "RSMV2988.JPG",
      ],
    }),
  },
  "project-day": {
    title: "Project Day",
    years: createEventGallery("project-day"),
  },
  "fancy-dress": {
    title: "Fancy Dress",
    years: createEventGallery("fancy-dress"),
  },
  "republic-day": {
    title: "Republic Day",
    years: createEventGallery("republic-day"),
  },
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
  address:
    "P S HIGHER SECONDARY SCHOOL-SANKARAPURAM, No.214, Ramakrishna Mutt Rd, Alamelu Manga Puram, Sankarapuram, Mylapore, Chennai, Tamil Nadu 600004, India",
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
  founderlogo: "/images/founderlogo.jpeg",
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

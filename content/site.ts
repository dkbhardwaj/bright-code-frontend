// Hardcoded site-wide data. When CMS integration returns, this file is the
// single place to swap for menu/footer queries.

export const MENU_LINKS = [
  { label: "AI Workflows", path: "/ai-workflow-implementation" },
  { label: "Human Oversight", path: "/ai-oversight" },
  { label: "How We Work", path: "/how-we-work" },
];

export const CTA_LINK = { label: "Book a call", path: "/contact" };

export const CONTACT = {
  email: "contact@bright-code.io",
  phone: "805-215-0549",
  phoneHref: "tel:8052150549",
  address: "2450 Colorado Ave, Suite 100E Santa Monica, CA 90404",
};

export const TAGLINE = "AI workflows for agencies, with human oversight you can trust";

export const GOOGLE_ADS_ID = "AW-16650844425";
// "Free consultation" conversion — fired when a booking request succeeds
export const GOOGLE_ADS_BOOKING_CONVERSION = "AW-16650844425/n8pxCLX50c8ZEIny3oM-";

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    path: "/",
    links: [
      { label: "AI Workflow Implementation", path: "/ai-workflow-implementation" },
      { label: "Human Oversight", path: "/ai-oversight" },
      { label: "How We Work", path: "/how-we-work" },
    ],
  },
  {
    title: "Company",
    path: "/",
    links: [
      { label: "Home", path: "/" },
      { label: "Book a call", path: "/contact" },
    ],
  },
];

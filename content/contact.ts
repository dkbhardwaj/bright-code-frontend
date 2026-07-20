import type { Blade } from "../components/PageBuilder/section.types";
import { CONTACT } from "./site";

// /contact — book a call.

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsContentWithFormOrCalanderLayout",
    contactTitle: "Book a call",
    subtitle:
      "Thirty minutes on your delivery pipeline: where AI already is, where it should be, and where it needs a human. We'll follow up with times that work.",
    formcalender: "calendar",
    link: {
      classname: "",
      linkText: `Email ${CONTACT.email}`,
      linkUrl: `mailto:${CONTACT.email}`,
      target: true,
    },
    sectionPadding: ["padding-medium"],
  },
  {
    fieldGroupName: "PagebuilderSectionsIconWithTextCardLayout",
    topDivider: true,
    cards: [
      {
        cardTitle: "Email",
        subtitle: CONTACT.email,
        cardImage: { node: { sourceUrl: "/footer-icon-light.svg", altText: "Email" } },
      },
      {
        cardTitle: "Phone",
        subtitle: CONTACT.phone,
        cardImage: { node: { sourceUrl: "/clock.svg", altText: "Phone" } },
      },
      {
        cardTitle: "Office",
        subtitle: CONTACT.address,
        cardImage: { node: { sourceUrl: "/globe.svg", altText: "Office" } },
      },
    ],
  },
];

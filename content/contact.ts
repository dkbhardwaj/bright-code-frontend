import type { Blade } from "../components/PageBuilder/section.types";
import { CONTACT } from "./site";

// /contact — book an appointment.

export const booking = {
  title: "Book an appointment",
  subtitle:
    "Thirty minutes on your delivery pipeline: where AI already is, where it should be, and where it needs a human. Pick a date and we'll confirm by email.",
};

export const sections: Blade[] = [
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

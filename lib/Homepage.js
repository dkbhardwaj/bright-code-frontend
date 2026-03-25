import { gql } from "graphql-request";

import { HERO_BANNER_FRAGMENT } from "./Section-Fragments/HeroBanner";
import { COMPARISON_ROW_GRID_FRAGMENT } from "./Section-Fragments/ComparisonRowGridLayout";

//...TabWithTestimonialLayout ${TAB_WITH_TESTIMONIAL_FRAGMENT}

export const GET_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${COMPARISON_ROW_GRID_FRAGMENT}

  query GetPage($uri: String!) {
    pageBy(uri: $uri) {
      title
      pagebuilder {
        sections {
          ...HeroBannerLayout
          ...ComparisonRowGrid
        }
      }
    }
  }
`;

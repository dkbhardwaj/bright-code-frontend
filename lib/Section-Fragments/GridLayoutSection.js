import { gql } from "graphql-request";

export const GRID_LAYOUT_SECTION_FRAGMENT = gql`
  fragment GridLayoutSectionLayout on PagebuilderSectionsGridLayoutSectionLayout {
    fieldGroupName
    sectionId
    theme
    sectionPadding
    rows {
      columnLayout
      cards {
        cardTitle
        cardDescription
        cardImage {
          node {
            altText
            sourceUrl
          }
        }
        cta {
          ctaLabel
          ctaUrl
          openInNewTab
        }
      }
    }
    link {
      target
      linkUrl
      linkText
      classname
    }
  }
`;

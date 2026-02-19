import { gql } from "graphql-request";

export const GRID_CARDS_SECTION_FRAGMENT = gql`
    fragment GridCardsSectionLayout on PagebuilderSectionsGridCardsSectionLayout {
          fieldGroupName
          sectionId
          theme
          gridCards {
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
          sectionPadding
          link {
            target
            linkUrl
            linkText
            classname
          }
        }
`
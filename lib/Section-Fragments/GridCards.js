import { gql } from "graphql-request";

export const GRID_CARDS_FRAGMENT = gql`
    fragment GridCardsLayout on PagebuilderSectionsGridCardsLayout {
          fieldGroupName
          sectionPadding
          theme
          link {
            target
            linkUrl
            linkText
            fieldGroupName
            classname
          }
          card {
            fieldGroupName
            subtitle
            title
            image {
              node {
                altText
                sourceUrl
              }
            }
            link {
              target
              linkUrl
              linkText
              fieldGroupName
              classname
            }
          }
        }
`
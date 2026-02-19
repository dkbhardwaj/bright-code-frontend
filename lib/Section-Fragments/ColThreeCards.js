import { gql } from "graphql-request";

export const COL_THREE_CARDS_FRAGMENT = gql`
    fragment ColThreeCardsLayout on PagebuilderSectionsColThreeCardsLayout {
      fieldGroupName
      sectionId
      theme
      sectionPadding
      cards {
        cardTitle
        fieldGroupName
        subtitle
        cta {
          fieldGroupName
          linkPath
          linkText
        }
        cardImage {
          node {
            altText
            sourceUrl
          }
        }
      }
      link {
        classname
        fieldGroupName
        linkText
        linkUrl
        target
      }
    }

`;
import { gql } from 'graphql-request';

export const ICON_WITH_TEXT_CARD_FRAGMENT = gql`
  fragment IconWithTextCardLayout on PagebuilderSectionsIconWithTextCardLayout {
    fieldGroupName
    sectionId
    sectionPadding
    theme
    topDivider
    cards {
      fieldGroupName
      subtitle
      cardTitle
      cardImage {
        node {
          id
          altText
          sourceUrl
        }
      }
    }
  }
`;

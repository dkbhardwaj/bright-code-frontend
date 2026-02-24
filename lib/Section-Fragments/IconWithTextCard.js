export const ICON_WITH_TEXT_CARD_FRAGMENT = `
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

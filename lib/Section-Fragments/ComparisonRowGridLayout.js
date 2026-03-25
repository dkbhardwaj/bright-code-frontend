import { gql } from "graphql-request";

export const COMPARISON_ROW_GRID_FRAGMENT = gql`
  fragment ComparisonRowGrid on PagebuilderSectionsComparisonRowGridLayout {
    fieldGroupName
    footerText
    leftColumnLabel
    rightColumnLabel
    sectionId
    sectionPadding
    theme
    link {
      classname
      linkText
      linkUrl
      target
    }
    comparisonRows {
      leftText
      rightText
    }
  }
`;

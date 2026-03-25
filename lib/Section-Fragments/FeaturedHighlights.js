import { gql } from "graphql-request";

export const FEATURED_HIGHLIGHTS_FRAGMENT = gql`
  fragment FeatureHighlightsLayout on PagebuilderSectionsFeaturedHighlightsLayout {
    fieldGroupName
    sectionId
    sectionPadding
    theme
    items {
      title
      description
      bulletColor
    }
    link {
      linkText
      linkUrl
      target
      classname
    }
  }
`;

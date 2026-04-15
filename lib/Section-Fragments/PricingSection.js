import { gql } from "graphql-request";

export const PRICING_SECTION_FRAGMENT = gql`
  fragment PricingSectionLayout on PagebuilderSectionsPricingSectionLayout {
    fieldGroupName
    sectionId
    sectionPadding
    sectionClasses
    theme
    eyebrowText
    introTitle
    subtitle
    description
    supportingText
    footerText
    wrapItems {
      note
    }
    link {
      linkText
      linkUrl
      target
      classname
    }
  }
`;

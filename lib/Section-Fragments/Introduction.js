import { gql } from 'graphql-request';

export const INTRODUCTION_FRAGMENT = gql`
  fragment IntroductionLayout on PagebuilderSectionsIntroductionLayout {
     eyebrowText
     fieldGroupName
     sub
     introTitle : title
     theme
     textAlighment
     sectionPadding
  }
`;

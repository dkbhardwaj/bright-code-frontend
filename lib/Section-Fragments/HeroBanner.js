import { gql } from 'graphql-request';

export const HERO_BANNER_FRAGMENT = gql`
  fragment HeroBannerLayout on PagebuilderSectionsHeroBannerLayout {
    fieldGroupName
    subtitle
    title {
        titleSuffix
        titlePrefix
        titleGradient
    }
    textUnderCta
    image {
        node {
        altText
        guid
        sourceUrl
        }
    }
    cta {
        link {
        target
        linkUrl
        linkText
        classname
        }
    }
    varient
  }
`;

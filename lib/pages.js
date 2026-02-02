import { gql } from 'graphql-request';


import { HERO_BANNER_FRAGMENT } from './Section-Fragments/HeroBanner';
import { INTRODUCTION_FRAGMENT } from './Section-Fragments/Introduction';

//...TabWithTestimonialLayout ${TAB_WITH_TESTIMONIAL_FRAGMENT}

export const GET_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRODUCTION_FRAGMENT}
  

  query NewQuery($uri: String!) {
    pageBy(uri: $uri) {
        id
        slug
        title
        pagebuilder {
            sections {
                ...HeroBannerLayout
                ...IntroductionLayout
            }
        }
    }
  }
`;


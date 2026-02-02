import { gql } from 'graphql-request';


import { HERO_BANNER_FRAGMENT } from './Section-Fragments/HeroBanner';

//...TabWithTestimonialLayout ${TAB_WITH_TESTIMONIAL_FRAGMENT}

export const GET_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  

  query GetPage($uri: String!) {
    pageBy(uri: $uri) {
      title
      pagebuilder {
        sections {
          ...HeroBannerLayout
          
        }
      }
    }
  }
`;




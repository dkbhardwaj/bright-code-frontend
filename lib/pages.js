import { gql } from 'graphql-request';


import { HERO_BANNER_FRAGMENT } from './Section-Fragments/HeroBanner';
import { INTRODUCTION_FRAGMENT } from './Section-Fragments/Introduction';
import { TIMELINE_FRAGMENT } from './Section-Fragments/Timeline';
import {IMAGE_WITH_CONTENT_FRAGMENT} from "./Section-Fragments/ImageWithContent";
import {COL_THREE_CARDS_FRAGMENT} from "./Section-Fragments/ColThreeCards";
import {FooterCta_Fragment} from "./Section-Fragments/FooterCta"
import {GRID_CARDS_SECTION_FRAGMENT} from "./Section-Fragments/GridCardsSection";


export const GET_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRODUCTION_FRAGMENT}
  ${TIMELINE_FRAGMENT}
  ${IMAGE_WITH_CONTENT_FRAGMENT}
  ${COL_THREE_CARDS_FRAGMENT}
  ${FooterCta_Fragment}
  ${GRID_CARDS_SECTION_FRAGMENT}
  

  query NewQuery($uri: String!) {
    pageBy(uri: $uri) {
        id
        slug
        title
        pagebuilder {
            sections {
                ...HeroBannerLayout
                ...IntroductionLayout
                ...TimelineLayout
                ...ImageWithContentLayout
                ...ColThreeCardsLayout
                ...FooterCtaLayout
                ...GridCardsSectionLayout
            }
        }
    }
  }
`;


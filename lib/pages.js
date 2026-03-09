import { gql } from 'graphql-request';


import { HERO_BANNER_FRAGMENT } from './Section-Fragments/HeroBanner';
import { INTRODUCTION_FRAGMENT } from './Section-Fragments/Introduction';
import { TIMELINE_FRAGMENT } from './Section-Fragments/Timeline';
import { IMAGE_WITH_CONTENT_FRAGMENT } from "./Section-Fragments/ImageWithContent";
import { COL_THREE_CARDS_FRAGMENT } from "./Section-Fragments/ColThreeCards";
import { FooterCta_Fragment } from "./Section-Fragments/FooterCta"
// import { GRID_CARDS_SECTION_FRAGMENT } from "./Section-Fragments/GridCardsSection";
import { CONTACT_SECTION_FRAGMENT } from './Section-Fragments/ContactSection';
import { ICON_WITH_TEXT_CARD_FRAGMENT } from './Section-Fragments/IconWithTextCard';



export const GET_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRODUCTION_FRAGMENT}
  ${TIMELINE_FRAGMENT}
  ${IMAGE_WITH_CONTENT_FRAGMENT}
  ${COL_THREE_CARDS_FRAGMENT}
  ${CONTACT_SECTION_FRAGMENT}
  ${FooterCta_Fragment}
  ${ICON_WITH_TEXT_CARD_FRAGMENT}
  

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
                ...ContactSectionLayout
                ...FooterCtaLayout
                ...IconWithTextCardLayout
            }
            footerTheme
        }
        status
    }
  }
`;

export const GET_PAGE_PREVIEW = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRODUCTION_FRAGMENT}
  ${TIMELINE_FRAGMENT}
  ${IMAGE_WITH_CONTENT_FRAGMENT}
  ${COL_THREE_CARDS_FRAGMENT}
  ${CONTACT_SECTION_FRAGMENT}
  ${FooterCta_Fragment}
  ${ICON_WITH_TEXT_CARD_FRAGMENT}
  
  query GetPagePreview($id: ID!) {
    page(id: $id, idType: DATABASE_ID, asPreview: true) {
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
                ...ContactSectionLayout
                ...FooterCtaLayout
                ...IconWithTextCardLayout
            }
        }
        status
        modified
    }
  }
`;

import { gql } from 'graphql-request';

export const IMAGE_WITH_CONTENT_FRAGMENT = gql`
  fragment ImageWithContentLayout on PagebuilderSectionsImageWithContentLayout {
          blurb
          eyebrowText
          sectionPadding
          theme
          imageWithContentTitle : title
          imageOnLeft
          link {
            target
            linkUrl
            linkText
            fieldGroupName
            classname
          }
          fieldGroupName
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
`;
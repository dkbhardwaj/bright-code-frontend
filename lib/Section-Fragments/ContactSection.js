import { gql } from 'graphql-request';

export const CONTACT_SECTION_FRAGMENT = gql`
  fragment ContactSectionLayout on PagebuilderSectionsContentWithFormOrCalanderLayout {
          fieldGroupName
          formcalender
          isIconCards
          iconWithTextCards {
            card {
              icon {
                node {
                  sourceUrl
                  altText
                }
              }
              subtitle
              title
            }
          }
          link {
            classname
            linkText
            linkUrl
            target
          }
          sectionPadding
          subtitle
          theme
          contactTitle: title
        }
`;

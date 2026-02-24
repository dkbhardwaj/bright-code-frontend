import { gql } from 'graphql-request';

export const CONTACT_SECTION_FRAGMENT = gql`
  fragment ContactSectionLayout on PagebuilderSectionsContentWithFormOrCalanderLayout {
          fieldGroupName
          sectionId
          formcalender
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

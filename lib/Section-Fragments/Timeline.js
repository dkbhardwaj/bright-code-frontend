import { gql } from 'graphql-request';

export const TIMELINE_FRAGMENT = gql`
  fragment TimelineLayout on PagebuilderSectionsTimelineViewLayout {
          fieldGroupName
          theme
          link {
            classname
            linkText
            linkUrl
            target
          }
          sectionPadding
          timelineItems {
            item
          }
        }
`;

import { gql } from "graphql-request";

export const PROCESS_TIMELINE_FRAGMENT = gql`
  fragment ProcessTimeline on PagebuilderSectionsProcessTimelineLayout {
    fieldGroupName
    sectionId
    sectionPadding
    steps {
      title
      description
    }
  }
`;

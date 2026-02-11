import { gql } from "graphql-request";

export const GET_FOOTER = gql`

query NewQuery {
  menu(id: "dGVybToz") {
    id
    name
    menuItems(first: 50)  {
      nodes {
        label
        path
        parentId
        childItems(first: 50)  {
          nodes {
            id
            path
            label
          }
        }
        id
      }
    }
  }
}

`;
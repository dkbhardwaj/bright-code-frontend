import { gql } from "graphql-request";

export const GET_FOOTER = gql`

query NewQuery {
  menu(id: "dGVybToz") {
    menuItems(first: 50) {
      nodes {
        id
        label
        linkRelationship
        locations
        title
        path
        parentId
        parentDatabaseId
        order
        menuItemId
        url
        uri
        databaseId
        menu {
          node {
            id
            menuId
            name
            slug
            menuItems(first: 50) {
              nodes {
                title
              }
            }
          }
        }
      }
    }
  }
}

`;
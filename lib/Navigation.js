import { gql } from "graphql-request";

export const GET_NAVIGATION = gql`
  query NewQuery {
  menu(id: "dGVybTo0") {
      id
      menuId
      name
      menuItems(first: 50) {
        nodes {
          path
          label
          parentId
          childItems(first: 50) {
            nodes {
              label
              path
              menuIcon
              menuIconAlt
              description
            }
          }
        }
      }
    }
  }
`;
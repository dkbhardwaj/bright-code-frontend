import { gql } from 'graphql-request';

export const GET_POSTS = gql`query NewQuery {
    posts {
        edges {
        node {
            id
            title
            slug
        }
        }
    }
  }`
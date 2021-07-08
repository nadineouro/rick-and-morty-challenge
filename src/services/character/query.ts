import gql from "graphql-tag";

export const GET_CHARACTERS = gql`
  query getCharacteres($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          id
          name
          type
          dimension
          residents {
            id
          }
        }
        image
        episode {
          air_date
        }
      }
    }
  }
`;

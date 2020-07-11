import { gql } from "@apollo/client";

export const GET_DECKS = gql`
  {
    decks {
      title
    }
  }
`;

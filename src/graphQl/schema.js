const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Deck {
    title: String
    records: [Record]
  }
  type Record {
    front: String
    back: String
    deck: Deck
  }
  type Query {
    decks: [Deck]
  }
`;

module.exports = typeDefs;

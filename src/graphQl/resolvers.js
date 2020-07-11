// const mongoose = require("mongoose");
// const Deck = mongoose.model("deck");

const decks = [
  { title: "eng", records: [{ front: "love", back: "любовь" }] },
  { title: "ru", records: [{ front: "love", back: "любовь" }] },
  { title: "uk", records: [{ front: "love", back: "любовь" }] },
  { title: "pl", records: [{ front: "love", back: "любовь" }] },
];

const resolvers = {
  Query: {
    decks: () => decks,
  },
};

module.exports = resolvers;

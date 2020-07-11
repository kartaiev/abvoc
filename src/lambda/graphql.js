const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("../graphQl/schema");
const resolvers = require("../graphQl/resolvers");
const connectDB = require("../../config/db");

exports.handler = async function (event, context) {
  await connectDB();
  const graphql = new ApolloServer({
    typeDefs,
    resolvers,
  });
  return new Promise((yay, nay) => {
    const cb = (err, args) => (err ? nay(err) : yay(args));
    graphql.createHandler()(event, context, cb);
  });
};

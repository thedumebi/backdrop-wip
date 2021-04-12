const { buildSchema } = require("graphql");

const Schema = buildSchema(`
    type ShortenedURL {
        _id: ID
        url: String!
        originalURL: String!
    }

    type RootQuery  {
        shortenURL(url: String!): String!
    }

    schema {
        query: RootQuery
    }
`);

module.exports = Schema;

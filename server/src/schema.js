const { gql } = require("apollo-server");

const typeDefs = gql`
  "Get a list of all the tracks"
  type Query {
    "List of Tracks"
    tracks: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    "Track ID"
    id: ID!
    "Track title"
    title: String!
    "Track author"
    author: Author!
    "Track thumbnail illustration"
    thumbnail: String
    "Track's approximate length to complete in minutes"
    length: Int
    "Track's number of modules"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    "Author ID"
    id: ID!
    "Author name"
    name: String!
    "Author photo"
    photo: String
  }
`;

module.exports = typeDefs;

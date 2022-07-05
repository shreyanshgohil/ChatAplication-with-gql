import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: ID
    userId: String
    desc: String
    img: String
    likes: [String]
    comments: String
  }
  type User {
    id: ID
    username: String
    email: String
    password: String
    profilePicture: String
    coverPicture: String
    followers: [String]
    followings: [String]
    isAdmin: String
    desc: String
    city: String
    from: String
    relationship: String
    bookmark: [String]
  }
  type Query {
    getPost(id: ID): Post
    getAllPost: [Post]
    getUser(userId: ID): User
  }
  type Mutation {
    likeDislikePost(id: ID, userId: String): String
    followUnfollowUser(searchUser: ID, currentUser: ID): String
  }
`;
export default typeDefs;

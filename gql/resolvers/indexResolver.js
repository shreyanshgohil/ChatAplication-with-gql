import postResolvers from "./postReolver.js";
import userResolvers from "./userResolver.js";
const resolvers = {
  ...postResolvers,
  ...userResolvers,
};
export default resolvers;

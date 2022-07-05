import User from "../../models/User.js";
import Post from "../../models/Post.js";

const resolvers = {
  Query: {
    getUser: async (parent, args, context, info) => {
      const { userId } = args;
      return await User.findById(userId);
    },
  },
  Mutation: {
    followUnfollowUser: async (parent, args, context, info) => {
      const { searchUser: sUser, currentUser: cUser } = args;
      const searchedUser = await User.findById(sUser);
      const currentUser = await User.findById(cUser);
      if (
        searchedUser.followers.includes(currentUser._id) &&
        currentUser.followings.includes(searchedUser._id)
      ) {
        await searchedUser.updateOne({ $pull: { followers: cUser } });
        await currentUser.updateOne({ $pull: { followings: sUser } });
        return "user unfollowed succesfully";
      } else if (
        !(
          searchedUser.followers.includes(currentUser._id) &&
          currentUser.followings.includes(searchedUser._id)
        )
      ) {
        await searchedUser.updateOne({ $push: { followers: cUser } });
        await currentUser.updateOne({ $push: { followings: sUser } });
        return "User followed succesfully";
      } else {
        return "Somethig gone wrong";
      }
    },
  },
};
export default resolvers;

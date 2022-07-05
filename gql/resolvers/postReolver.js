import Post from "../../models/Post.js";
const resolver = {
  Query: {
    getPost: async (parent, args, context, info) => {
      const { id } = args;
      return await Post.findById(id);
    },
    // Remove this one not needed
    getAllPost: async (parent, args, context, info) => {
      return await Post.find();
    },
  },
  Mutation: {
    likeDislikePost: async (parent, args, context, info) => {
      const { id, userId } = args;
      const post = await Post.findById(id);
      if (post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } });
        return "post disliked sucessfully";
      } else {
        await post.updateOne({ $push: { likes: userId } });
        return "post liked sucessfully";
      }
    },
  },
};
export default resolver;

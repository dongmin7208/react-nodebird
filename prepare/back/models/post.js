module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {},
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci,", //mb4 이모티콘! 저장가능
    }
  );
  Post.associate = (db) => {};
  return Post;
};

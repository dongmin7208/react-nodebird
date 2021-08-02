module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: {},
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci,", //mb4 이모티콘! 저장가능
    }
  );
  Comment.associate = (db) => {};
  return Comment;
};

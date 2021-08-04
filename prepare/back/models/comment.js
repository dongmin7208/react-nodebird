module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //belongsTo 해주는애들은 이런식으로 만들어짐
      // UserId: 1
      // PostId: 3
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //mb4 이모티콘! 저장가능
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};

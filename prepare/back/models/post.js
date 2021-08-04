module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //mb4 이모티콘! 저장가능
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment); //게시글한개에 댓글여러개. <<이런 관계들을 생각하고 작성
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //다대다 관계
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //사용자 좋아요
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //이름이 헷갈리기때문에 리트윗으로 변경시켜줘.
  };
  return Post;
};

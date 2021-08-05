const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        // RetweetId
      },
      {
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", //mb4 이모티콘! 저장가능
        sequelize,
      }
    );
  }
  static associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.hasMany(db.Comment); //게시글한개에 댓글여러개. <<이런 관계들을 생각하고 작성 // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //다대다 관계
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //사용자 좋아요 // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //이름이 헷갈리기때문에 리트윗으로 변경시켜줘. // post.addRetweet
  };
};

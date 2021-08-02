module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //User가 모델 이름인데 자동으로 소문자로 users 복수로되서 mysql에 저장됨.
      //id:{}, 기본적으로 들어가있음 1,2,3,4,순으로 들어감
      email: {
        type: DataTypes.STRING(30), //Type = string,text,boolean,integer,float,datetime 자주 씀
        allowNull: false, //필수
        unique: true, //고유한 키 값 이메일 하나만
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글저장
    }
  );
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" }); //사용자 게시글에 좋아요!
    db.User.belongsToMany(db.Post, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.Post, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
};

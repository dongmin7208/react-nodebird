module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci,", //mb4 이모티콘! 저장가능
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post); //다대다 관계
  };
  return Hashtag;
};

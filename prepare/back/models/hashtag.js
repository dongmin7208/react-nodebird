module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      name: {},
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci,", //mb4 이모티콘! 저장가능
    }
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};

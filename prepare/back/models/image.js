module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {},
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci,", //mb4 이모티콘! 저장가능
    }
  );
  Image.associate = (db) => {};
  return Image;
};

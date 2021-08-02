module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //User가 모델 이름인데 자동으로 소문자로 users 복수로되서 mysql에 저장됨.
      //id:{}, 기본적으로 들어가있음 1,2,3,4,순으로 들어감
      email: {},
      nickname: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글저장
    }
  );
  User.associate = (db) => {};
  return User;
};

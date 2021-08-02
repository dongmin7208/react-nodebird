const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development;";
const config = require("../config/config")[env]; //config.json파일안에 development내의 내용들 유저이름,패스워드 등.
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
); //불러준다

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

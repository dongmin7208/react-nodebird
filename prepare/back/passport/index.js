const passport = require("passport");
const { User } = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 서버쪽에 [{ id: 1, cookie: 'clhxy' }]
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user에 넣어줌
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
  local();
};

const express = require("express");
const bcrypt = require("bcrypt");
const router = require("./post");
const routes = express.Router();
const { User, Post } = require("../models");
const { noExtendLeft } = require("sequelize/types/lib/operators");
const db = require("../models");
const { isNotLoggedIn, isLoggedIn } = require("./middlewares");

router.post("/login", passport.authenticate("local"));

router.post("/login", isNotLoggedIn, (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"], //전체 데이터 중에서 비밀번호만 빼고 가져오겠다
        },
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미사용중아이디");
    } //return했기때문에 라우터종료 2번요청안돼
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
    // POST /user/
  } catch (error) {
    console.error(error);
    next(error); //status 500
  }
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;

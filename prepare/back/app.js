const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결성공!");
  })
  .catch(console.error);
passportConfig();
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3060", "nodebird.com", "http://54.178.45.151"], //* 안된다. 프론트와백엔드간에 민감한 정보를 보내니까. 정확한 주소를 적어달라 에러
    credentials: true, //쿠키를 같이 전달하고싶으면 true로 만들어주면뎀.
  })
);
//밑에서 실행되면 안됨 위에서부터 실행되서 post가 undefind 될수있으니.
//바로밑에 /images 추가해주면 postform에서도 경로 추가해줘야함.
app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});
// api 는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

app.listen(80, () => {
  console.log("서버 실행 중!");
});

const express = require("express");
const postRouter = require("./routes/post");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const db = require("./models"); //db안에 sequelize 맨밑에 넣어놨음. 5번째 코드
const passportConfig = require("./passport");
const passport = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);
passportConfig();
app.use(
  cors({
    origin: "http://localhost:3060", //* 안된다. 프론트와백엔드간에 민감한 정보를 보내니까. 정확한 주소를 적어달라 에러
    credentials: true, //쿠키를 같이 전달하고싶으면 true로 만들어주면뎀.
  })
);
//밑에서 실행되면 안됨 위에서부터 실행되서 post가 undefind 될수있으니.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRE));
app.use(
  session({
    savaUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use("/user", postRouter);

app.listen(3065, () => {
  console.log("실행중");
});

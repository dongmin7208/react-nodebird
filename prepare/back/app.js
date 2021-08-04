const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models"); //db안에 sequelize 맨밑에 넣어놨음. 5번째 코드
const passportConfig = require("./passport");
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
    origin: true,
  })
);
//밑에서 실행되면 안됨 위에서부터 실행되서 post가 undefind 될수있으니.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/", (req, res) => {
  res.send("hello api");
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

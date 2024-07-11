const express = require("express");
const app = express(); // 서버 생성. 생성된 서버를 app이라는 변수에 담는다.
const port = 3000;
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/post.router");

// const connection = require("./config");
// connection.connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 서버에서 / 라는 경로로 get요청을 받으면, 콜백 함수를 실행시키겠다. (설정)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// /user라는 경로로 요청이 들어오면 userRouter를 사용하겠다.
app.use("/user", userRouter);
app.use("/post", postRouter);

// listen = 서버를 열겠다. 3000번 포트로 서버를 열겠다. 그리고 서버가 열리면, console.log를 찍겠다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// route = 길
// router = 길을 연결해주는 녀석. = 길.

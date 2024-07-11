// app = 메인 서버
// router = 메인 서버에 연결할 수 있는 길
const router = require("express").Router();
// const mysql = require("../config");

// query를 이용
router.get("/", (req, res) => {
  // query, param의 정보는 url에 들어있고, 그 url은 Http Request에 들어있다.
  const query = req.query;

  const user = {
    name: "hansu",
    age: 20,
    nickname: "test",
  };

  const nickname = query.nickname;

  // ~ 에 있어요. shift빼고 ~ 누르면 백틱.
  console.log(`nickname : ${nickname}`);

  // == === != !== 등호 두개랑, 세개
  if (user.nickname === nickname) {
    res.json(user);
  } else {
    res.send("User Not Found");
  }
});

// param
router.get("/:name", (req, res) => {
  const param = req.params;

  const user = {
    name: "hansu",
    age: 20,
    nickname: "test",
  };

  const name = param.name;

  if (user.name === name) {
    res.json(user);
  } else {
    res.send("User Not Found On Param");
  }
});

// post, put, patch
router.post("/", (req, res) => {
  const body = req.body;

  console.log(body);

  res.json(body);
});

router.post("/sign-up", (req, res) => {
  const body = req.body;
  // body.email, body.password, body.nickname
  const { email, password, nickname } = body;

  // const sql = `INSERT INTO User (email, password, nickname)
  // VALUES ('${email}', '${password}', '${nickname}')`;

  // mysql.query(sql);

  res.send("Sign up Success");
});

module.exports = router;

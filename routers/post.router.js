// post.router.js에
// get요청이 / 경로로 들어오면,
// Post Main Page가 뜨도록.
// 한 번 만들어보세요.
const router = require("express").Router();

router.get("/", (req, res) => {
  // request, response
  // request객체, response객체
  // reqeust객체 = client가 요청에 담아서
  //              보낸 모든 정보
  // response객체 = 서버가 보낼 정보를 담은 객체
  res.send("Post Main Page");
});

module.exports = router;

// 1. express.Router()를 불러온다.
// 2. router.get 함수를 사용해서 콜백함수를
//    등록한다.
// 3. 만들어놓은 router를 export한다.
// 4. export된 router를 app과 연결한다.

// 간단 ver.
// 1. post 길을 만든다.
// 2. post 길에 함수를 등록한다.
// 3. post 길을 메인 서버와 연결한다.

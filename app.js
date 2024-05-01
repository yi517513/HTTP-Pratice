const http = require("http");

// request object, response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
  } else {
    res.write("不存在的頁面");
  }
}); // callback function with 2 parameter

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
}); // 不斷監聽請求

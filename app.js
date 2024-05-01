const http = require("http");

// request object, response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8 " });
  res.write("歡迎來到我的網頁");
  res.end();
}); // callback function with 2 parameter

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
}); // 不斷監聽請求

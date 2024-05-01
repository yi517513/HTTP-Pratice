const http = require("http");

// request object, response object
const server = http.createServer((req, res) => {
  console.log(req.headers); // Node.js 中獲取HTTP request object。這個object包含了客戶端在發送HTTP request時傳遞的所有header資訊
  console.log(req.headers["user-agent"]); // 客戶端使用的瀏覽器類型和版本
  console.log(req.url); // 取得客戶端要請求的url
}); // callback function with 2 parameter

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
}); // 不斷監聽請求

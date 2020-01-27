let proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy(["/api", "/auth"], { target: "http://localhost:3500" }));
};

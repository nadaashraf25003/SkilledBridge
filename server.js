// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("Data/db.json");

// Use default middleware
const middlewares = jsonServer.defaults({
  static: "./build",
});

server.use(middlewares);

// Add custom routes before router
server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

server.use(router);

// Start server on port 3000
server.listen(3005, () => {
  console.log("JSON Server is running");
});

// Export the Server API

module.exports = server;

const app = require("./server");
const http = require("http");
const config = require("./utils/config");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server is running on ${config.PORT}`);
});

const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const PORT = process.env.PORT;
const APP_SECRET = process.env.APP_SECRET;

const http = require("http");

const server = http.createServer(app);

server.on("listening", () => {
  console.log("Listening on " + PORT);
});

server.listen(PORT);
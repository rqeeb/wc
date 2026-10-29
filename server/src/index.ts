import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (s) {
  console.log("Connected!");
  s.send("Hello from Server!");

  setInterval(() => {
    s.send("Nice" + Math.random());
  }, 500);
});

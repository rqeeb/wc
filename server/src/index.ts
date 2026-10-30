import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Connected!");
  socket.send("Hello from Server!");

  socket.on("message", (message) => {
    if (message.toString() == "ping") {
      socket.send("pong");
    }

    socket.send("Hey! from WEBSOCKET");
  });
});

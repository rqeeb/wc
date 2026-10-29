import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("Connected!");
    socket.send("Hello from Server!");
});
//# sourceMappingURL=index.js.map
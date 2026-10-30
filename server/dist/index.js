import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    socket.on("message", (data) => {
        const message = data.toString();
        //TODO
        wss.clients.forEach((client) => {
            if (client.readyState == WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
//# sourceMappingURL=index.js.map
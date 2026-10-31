import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", function (socket) {
    allSockets.push(socket);
    socket.on("message", (data) => {
        const message = data.toString();
        //TODO
        // wss.clients.forEach((client) => {
        //   if (client.readyState == WebSocket.OPEN) {
        //     client.send(message);
        //   }
        // });
        for (let i = 0; i < allSockets.length; i++) {
            let client = allSockets[i];
            if (!client) {
                return;
            }
            client.send(message);
        }
    });
});
//# sourceMappingURL=index.js.map
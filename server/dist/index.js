import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", function (socket) {
    socket.on("message", (message) => {
        const parsedData = JSON.parse(message);
        if (parsedData.type == "join") {
            allSockets.push({
                socket,
                room: parsedData.payload.room,
            });
            console.log("User Registered!");
        }
        if (parsedData.type == "message") {
            const currUserRoom = allSockets.find((x) => x.socket == socket)?.room;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.socket != socket &&
                    allSockets[i]?.room == currUserRoom) {
                    allSockets[i]?.socket.send(parsedData.payload.message);
                }
            }
        }
    });
    // socket.on("close", () => {
    //   allSockets = allSockets.filter((x) => x != socket);
    // });
});
//# sourceMappingURL=index.js.map
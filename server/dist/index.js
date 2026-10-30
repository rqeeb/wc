import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("Client connected!");
    socket.on("message", (data) => {
        const message = data.toString();
        // Send the message to every connected client
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    socket.on("close", () => {
        console.log("Client disconnected!");
    });
    socket.on("error", console.error);
});
console.log("WebSocket server running on port 8080");
//# sourceMappingURL=index.js.map
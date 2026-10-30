import { useEffect, useRef, useState } from "react";
import type { Message } from "../components/types";

export function useWebSocket() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            username: data.username,
            text: data.text,
            timestamp: new Date(),
          },
        ]);
      } catch (err) {
        console.error("Invalid message recieved: ", err);
      }
    };

    ws.onclose = () => setConnected(false);
    ws.onerror = (err) => console.error(err);

    return () => {
      ws.close();
      if (wsRef.current === ws) {
        wsRef.current = null;
      }
    };
  }, []);

  function sendMessage(username: string, text: string) {
    if (wsRef.current?.readyState !== WebSocket.OPEN) return;

    wsRef.current.send(JSON.stringify({ username, text }));
  }

  return { messages, sendMessage, connected };
}

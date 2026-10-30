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
  });
}

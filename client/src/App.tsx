import { useEffect, useState } from "react";
import "./App.css";
import ChatHeader from "./components/ChatHeader.tsx";
import MessageInput from "./components/MessageInput.tsx";
import MessageList from "./components/MessageList.tsx";
import type { Message } from "./components/types.ts";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function sendMessage(username: string, text: string) {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      username,
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      console.log(event.data);
    };
  }, []);

  return (
    <div className="container">
      <div className="box">
        <ChatHeader />
        <br />
        <hr />
        <br />
        <MessageList messages={messages} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;

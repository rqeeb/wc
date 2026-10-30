import React, { useState } from "react";
import type { MessageInputProps } from "./types";

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function handleUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleMessage(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  function processInput() {
    if (!username.trim() || !message.trim()) return;

    onSend(username.trim(), message.trim());
    setMessage("");
  }

  return (
    <div className="messageInput">
      <input
        id="username"
        value={username}
        onChange={handleUsername}
        name="username"
        type="text"
      />
      <input
        id="message"
        value={message}
        onChange={handleMessage}
        name="message"
        type="text"
      />
      <button onClick={processInput}>Send</button>
    </div>
  );
};

export default MessageInput;

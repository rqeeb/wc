// import React from 'react'

import React, { useState } from "react";

const MessageInput = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        id="username"
        value={username}
        onChange={handleUsername}
        name="username"
        type="text"
      />
      <p>Current username: {username}</p>
      <input
        id="message"
        value={message}
        onChange={handleMessage}
        name="message"
        type="text"
      />
      <button>Send</button>
    </div>
  );
};

export default MessageInput;

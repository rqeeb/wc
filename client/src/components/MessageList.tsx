import type { MessageListProps } from "./types";

const MessageList = ({ messages }: MessageListProps) => {
  function usernameColor(username: string) {
    let hash = 0;

    for (const char of username) {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    }

    return `hsl(${Math.abs(hash) % 360}, 70%, 65%)`;
  }

  return (
    <div className="messageList">
      {messages.map((message) => (
        <div key={message.id}>
          <span
            className="from"
            style={{ color: usernameColor(message.username) }}
          >
            {message.username}:{" "}
          </span>
          <span className="chat">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

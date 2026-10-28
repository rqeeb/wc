import type { MessageListProps } from "./types";

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="messageList">
      {messages.map((message) => (
        <div key={message.username}>
          <span className="from">{message.username}: </span>
          <span className="chat">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;

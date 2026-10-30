import "./App.css";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import { useWebSocket } from "./hooks/useWebSocket";

function App() {
  const { messages, sendMessage, connected } = useWebSocket();

  return (
    <div className="container">
      <div className="box">
        <ChatHeader connected={connected} />
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

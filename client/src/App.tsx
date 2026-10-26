import "./App.css";
import ChatHeader from "./components/ChatHeader.tsx";
import MessageInput from "./components/MessageInput.tsx";

function App() {
  return (
    <div className="container">
      <div className="box">
        <ChatHeader />
        <div className="chat">ohh</div>

        <span className="from">Rober: </span>

        <span className="chat">Hello </span>
        <span className="chat">Hello </span>
        <MessageInput />
      </div>
    </div>
  );
}

export default App;

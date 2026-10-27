import "./App.css";
import ChatHeader from "./components/ChatHeader.tsx";
import MessageInput from "./components/MessageInput.tsx";
import MessageList from "./components/MessageList.tsx";

function App() {
  return (
    <div className="container">
      <div className="box">
        <ChatHeader />
        <br />
        <hr />
        <br />
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;

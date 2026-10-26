import "./App.css";
import ChatHeader from "./components/ChatHeader.tsx";

function App() {
  return (
    <div className="container">
      <div className="box">
        <ChatHeader />
        <div className="chat">ohh</div>

        <span className="from">Rober: </span>

        <span className="chat">Hello </span>
        <span className="chat">Hello </span>
      </div>
    </div>
  );
}

export default App;

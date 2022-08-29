import { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  return (
    <div className="App">
      <h1>Hello There !! </h1>
      {showPara && <p>This is new p tag</p>}
      <Button onClick={() => setShowPara((prevState) => !prevState)}>
        Show Paragraph
      </Button>
    </div>
  );
}

export default App;

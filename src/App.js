import { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log("App Running");
  return (
    <div className="App">
      <h1>Hello There !! </h1>
      <DemoOutput show={false} />
      <Button
        onClick={useCallback(() => setShowPara((prevState) => !prevState), [])}
      >
        Show Paragraph
      </Button>
    </div>
  );
}

export default App;

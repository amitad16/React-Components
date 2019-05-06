import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        style={{ fontSize: "1.2em" }}
        loadingStyle={{ fontSize: "1.5em" }}
        onClick={() => {
          console.log("normal click");
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;

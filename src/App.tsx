import React from "react";
import MenuBar from "./components/MenuBar";
import AppRouter from "./routes";
import { Button } from "reactstrap";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuBar />
      <AppRouter />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello</Button>
      </header>
    </div>
  );
};

export default App;

import React from "react";
import MenuBar from "./components/MenuBar";
import AppRouter from "./routes";
import { Container } from "reactstrap";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
};

export default App;

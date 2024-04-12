import { useState } from "react";
import mascot from "./assets/Mascot.png";
import "./App.css";
import Card from "./Card/Card";
import Column from "./Column/Column";
import Board from "./Board/Board";
import AddCard from "./AddCard/AddCard";
import ColumnControlled from "./ColumnControlled/ColumnControlled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={mascot} className="logo atlas" alt="Atlas logo" />
        </a>
      </div>
      <h1>Vite + React + Atlas</h1>
      <DndProvider backend={HTML5Backend}>
        <Board>
          <ColumnControlled />
          <ColumnControlled />

          <ColumnControlled />
        </Board>
      </DndProvider>
    </>
  );
}

export default App;

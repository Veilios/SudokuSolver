import React, { useEffect } from "react";

import SudokuBoard from "./components/SudokuBoard";
import { SudokuProvider } from "./context/SudokuContext";

import generator from "sudoku";

import "./App.scss";


const App = (props) => {

  useEffect(() => {
  
    const nBoard = generator.makepuzzle();

    const Seperator = (items, size) => {
      const sBoard = [];
      items = [].concat(...items);

      while (items.length) {
        sBoard.push(
          items.splice(0, size)
        );
      };

      return sBoard;
    };

    console.log("generated board", nBoard);
    console.log("organized board", Seperator(nBoard, 9));


  }, []);
  

  return (
    <SudokuProvider>
      <div className='App' >
        <h1>Sudoku Solver</h1>
        <SudokuBoard />

        <button onClick={() => console.log("hello")} >New board</button>
        <button>Verify board</button>
        <button>Solve</button>
      </div>
    </SudokuProvider>
  )
};

export default App;
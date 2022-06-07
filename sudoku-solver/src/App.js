import React, { useEffect } from "react";

import SudokuBoard from "./components/SudokuBoard";
import { SudokuProvider } from "./context/SudokuContext";

import generator from "sudoku";

import "./App.scss";
import { Solve } from "./hooks/Solve";


const App = (props) => {

  useEffect(() => {
  
    const nBoard = generator.makepuzzle();
    const apiSolution = generator.solvepuzzle(nBoard);
    const sBoard = [];

    for (let i = 0; i < nBoard.length; i++) {
      if (nBoard[i] === null) {
        nBoard[i] = 0;
      } else {
        nBoard[i] = nBoard[i] + 1;
      }
    };
    
    const Seperator = (items, size) => {
      items = [].concat(...items);

      while (items.length) {
        sBoard.push(
          items.splice(0, size)
        );
      };

      return sBoard;
    };

    Seperator(nBoard, 9);
    console.log("generated board", nBoard);
    console.log("organized board", sBoard);

    
    console.log("api solution solver", apiSolution);
    console.log("Backtracking Method of solving", Solve(sBoard));


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
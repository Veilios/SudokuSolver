import React from "react";

import SudokuBoard from "./components/SudokuBoard";
import { SudokuProvider } from "./context/SudokuContext";

import "./App.scss";


const App = (props) => {


  // const handleChange = (e) => {
  //   console.log(sudoku.rows[1].cols[1].value)
  // };

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
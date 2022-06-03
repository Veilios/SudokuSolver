import React, { useState } from "react";
import generator from "sudoku";

import SudokuBoard from "./components/SudokuBoard";

import "./App.scss";


const App = () => {


  const handleChange = (e) => {
    console.log("Handle Change Rows: ", result)
  };

  return (
    <div className='App' >
      <h1>Sudoku Solver</h1>

      <UserContext.Provider value={{ sudoku, handleChange }} >
        <SudokuBoard />
      </UserContext.Provider>

      <button onClick={() => setSudoku(generateSudoku())} >New board</button>
      <button>Verify board</button>
      <button>Solve</button>
    </div>
  )
};

export default App;
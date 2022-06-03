import React, { useState } from "react";
import generator from "sudoku";

import SudokuBoard from "./components/SudokuBoard";

import "./App.scss";


const App = () => {


  const handleChange = (e) => {
    console.log(sudoku.rows[1].cols[1].value)
    setSudoku(
      produce((state) => {
        state.sudoku.rows[e.row].cols[e.col].value = e.value
      })
    )
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
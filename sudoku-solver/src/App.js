import React from "react";

import SudokuBoard from "./components/SudokuBoard";
import { SudokuProvider } from "./context/SudokuContext";

import "./App.scss";
import SudokuOptions from "./components/SudokuOptions";


const App = () => {

  return (
    <SudokuProvider>
      <div className='App' >
        <h1>Sudoku Solver</h1>
        <SudokuBoard />
        <SudokuOptions />
      </div>
    </SudokuProvider>
  );
};

export default App;
import React, { useState } from "react";
import generator from "sudoku";
import produce from 'immer';

import SudokuBoard from "./components/SudokuBoard";

import "./App.scss";



const generateSudoku = () => {
  const raw = generator.makepuzzle();
  const result = {rows: []};

  for (let i = 0; i < 9; i++) {
    const row = {cols: [], index: i};
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value !== null
      };

      row.cols.push(col);
    };

    result.rows.push(row);
  };

  return result;
};

const App = () => {

  const [sudoku, setSudoku] = useState(generateSudoku())

  const handleChange = (e) => {
    console.log(sudoku.rows[1].cols[1].value)
    setSudoku(
      produce((state) => {
        sudoku.rows[e.row].cols[e.col].value = e.value
      })
    )
  };

  return (
    <div className='App' >
      <h1>Sudoku Solver</h1>

      <SudokuBoard sudoku={sudoku} onChange={handleChange} />

      <button onClick={() => setSudoku(generateSudoku())} >New board</button>
      <button>Verify board</button>
      <button>Solve</button>
    </div>
  )
};

export default App;
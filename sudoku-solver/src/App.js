import React, { useState } from "react";
import generator from "sudoku";
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

  return (
    <div className='App' >
      <h1>Sudoku Solver</h1>
    </div>
  )
};

export default App;
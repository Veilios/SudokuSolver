import React from "react";

import SudokuBoard from "./components/SudokuBoard";

import "./App.scss";


const App = (props) => {


  // const handleChange = (e) => {
  //   console.log(sudoku.rows[1].cols[1].value)
  // };

  return (
    <div className='App' >
      <h1>Sudoku Solver</h1>
      {console.log(props)}
      <SudokuBoard />

      <button onClick={() => console.log("hello")} >New board</button>
      <button>Verify board</button>
      <button>Solve</button>
    </div>
  )
};

export default App;
import React from "react";

import SudokuBoard from "./components/SudokuBoard";
import { SudokuProvider } from "./context/SudokuContext";

// import generator from "sudoku";

import "./App.scss";


const App = (props) => {

  // useEffect(() => {
  //   let nBoard = generator.makepuzzle();
  //   console.log("this: ", nBoard);

  //   let sBoard = [
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     [],
  //     []
  //   ];

  //   // let cell = 0
  //   // if (nBoard[nBoard.length - 1] === null) {
  //   //   cell = 0
  //   // } else {
  //   //   cell = nBoard[nBoard.length - 1] 
  //   // }

  //   // console.log("cell", cell);  
  //   let cell = 0

  //   for (let i = 0; i < 9; i++) {
  //     for (let j = 0; j < 9; j++) {
  //       if (nBoard[nBoard - 1] === null) {
  //         cell = 0;
  //       } else {
  //         cell = nBoard[nBoard - 1]
  //       }

  //       nBoard.pop();

  //       sBoard[i] = [
  //         ...sBoard[i],
  //         nBoard[i][nBoard - 1] + 1
  //       ]
  //     }
  //   };

  //   console.log(sBoard);
  // }, []);


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
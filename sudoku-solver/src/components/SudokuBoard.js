import React from 'react';

const SudokuBoard = (sudoku) => {
  return (
    <div>{JSON.stringify(sudoku)}</div>
  )
};

export default SudokuBoard;
import React from 'react';

import "./Sudoku.scss";

const SudokuCell = (props) => {
    return (
        <input className='cell' value={props.cell.value} readOnly={props.cell.readonly} />
    )
};

export default SudokuCell;
import React from 'react';

import "./Sudoku.scss";

const SudokuCell = (props) => {
    return (
        <input
            className='cell'
            value={props.cell === 0 ? "" : props.cell}
            readOnly={true}
        />
    );
};

export default SudokuCell;
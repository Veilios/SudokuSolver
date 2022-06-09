import React from 'react';
import { v4 as uuidv4 } from "uuid";

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
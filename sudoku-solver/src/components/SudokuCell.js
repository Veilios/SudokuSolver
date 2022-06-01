import React from 'react';

import "./Sudoku.scss";

const SudokuCell = (props) => {

    const handleChange = (e) => {
        const value = "" ? "" : parseInt(e.target.value, 10);

        props.onChange({...props.field, value: value })
    };

    return (
        <input
            className='cell'
            value={props.cell.value || ""}
            readOnly={props.cell.readonly}
            onChange={handleChange}
        />
    )
};

export default SudokuCell;
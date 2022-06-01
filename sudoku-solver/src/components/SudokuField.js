import React from 'react';

import "./Sudoku.scss";

const SudokuField = (props) => {
    return (
        <input className='field' value={props.field.value} readOnly={props.field.readonly} />
    )
};

export default SudokuField;
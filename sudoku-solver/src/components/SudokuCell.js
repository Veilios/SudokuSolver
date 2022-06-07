import React, { useContext } from 'react';
import { SudokuContext } from '../context/SudokuContext';

import "./Sudoku.scss";

const SudokuCell = (props) => {
    const { dispatch, sudoku } = useContext(SudokuContext);
    

    const handleChange = (e) => {   
        const newBoard = sudoku

        newBoard.rows[props.cell.row].cols[props.cell.col].value = e.target.value;

        dispatch({
            type: "FILL_CELL",
            payload: newBoard
        })

        console.log("state update: ", sudoku);
    };

    return (
        <input
            className='cell'
            value={props.cell.value}
            readOnly={props.cell.readonly}
            onChange={handleChange}
        />
    )
};

export default SudokuCell;
import React, { useContext } from 'react';
import { SudokuContext } from '../context/SudokuContext';

import "./Sudoku.scss";

const SudokuCell = (props) => {
    const { dispatch, sudoku } = useContext(SudokuContext);
    

    // const handleChange = (e) => {   
    //     const nBoard = sudoku;

    //     // nBoard[props.row][props.index].value = e.target.value;

    //     // dispatch({
    //     //     type: "FILL_CELL",
    //     //     payload: nBoard
    //     // });

    //     console.log("idk", props.row)

    // };

    return (
        <>
        <input
            className='cell'
            value={props.cell === 0 ? "" : props.cell}
            readOnly={true} // {props.cell === 0 ? false : true}
            // onChange={handleChange}
        />
        </>
    )
};

export default SudokuCell;
import React, { useContext } from 'react';
import { v4 as uuidv4 } from "uuid";

import SudokuCell from './SudokuCell';
import { SudokuContext } from '../context/SudokuContext';

import "./Sudoku.scss";


const SudokuBoard = () => {
    const { sudoku, solved } = useContext(SudokuContext);

    return (
        <div className='board' >
            {sudoku.map(row => (
                <div className='row' >
                    {row.map(function (cell, index) {
                        return (
                            <SudokuCell className="cell" cell={cell} row={sudoku.indexOf(row)} key={(sudoku.indexOf(row)) + index} />
                        )
                    })}
                </div>
            ))}
            {solved ? <h5>Congrats, Sovled!</h5> : null}
        </div>
    );
};

export default SudokuBoard;
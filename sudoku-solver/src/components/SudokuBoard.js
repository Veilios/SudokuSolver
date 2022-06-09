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
                <div className='row' key={uuidv4()}>
                    {row.map(cell => (
                        <SudokuCell className="cell" cell={cell} row={sudoku.indexOf(row)} key={uuidv4()} />
                    ))}
                </div>
            ))}
            {solved ? <h5>Congrats, Sovled!</h5> : null}
        </div>
    );
};

export default SudokuBoard;
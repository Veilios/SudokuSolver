import React, { useContext } from 'react';
import SudokuCell from './SudokuCell';
import { SudokuContext } from '../context/SudokuContext';

import "./Sudoku.scss";

const SudokuBoard = () => {
    const { sudoku, solved } = useContext(SudokuContext);

    return (
        <div className='board' >
            {/* {sudoku.rows.map(row => (
                <div className='row' key={row.index} >
                    {row.cols.map(cell => (
                        <SudokuCell className="cell" cell={cell} key={cell.col} />
                    ))}
                </div>
            ))} */}

            {sudoku.map(row => (
                <div className='row' >
                    {row.map(cell => (
                        <>
                        <SudokuCell className="cell" cell={cell} row={sudoku.indexOf(row)} />
                        </>
                    ))}
                </div>
            ))}
            {solved ? <h5>Congrats, Sovled!</h5> : null}
        </div>
    )
};

export default SudokuBoard;
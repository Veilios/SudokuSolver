import React from 'react';
import SudokuCell from './SudokuCell';

import "./Sudoku.scss";

const SudokuBoard = (props) => {
    return (
        <div className='board' >
            {props.sudoku.rows.map(row => (
                <div className='row' key={row.index} >
                    {row.cols.map(cell => (
                        <SudokuCell className="cell" cell={cell} key={cell.col} onChange={props.onChange} />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default SudokuBoard;
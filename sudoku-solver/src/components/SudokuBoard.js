import React from 'react';
import SudokuField from './SudokuField';

import "./Sudoku.scss";

const SudokuBoard = (props) => {
    return (
        <div className='board' >
            {props.sudoku.rows.map(row => (
                <div className='row' key={row.index} >
                    {row.cols.map(field => (
                        <SudokuField className="cell" field={field} key={field.col} />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default SudokuBoard;
import React from 'react';
import SudokuField from './SudokuField';

const SudokuBoard = (props) => {
    return (
        <div className='board' >
            {props.sudoku.rows.map(row => (
                <div className='row' key={row.index} >
                    {row.cols.map(field => (
                        <SudokuField field={field} key={field.col} />
                    ))}
                </div>
            ))}
        </div>
    )
};

export default SudokuBoard;
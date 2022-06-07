import React, { useContext } from 'react';

import { SudokuContext } from '../context/SudokuContext';
import { generateSudoku } from '../context/SudokuContext';

const SudokuOptions = () => {
    const { dispatch } = useContext(SudokuContext);

    const newBoard = () => {
        const n = generateSudoku();

        dispatch({
            type: "NEW_BOARD",
            payload: n
        })

        console.log("new board created");
    };

    return (
        <div className='Options' >
            <button onClick={() => newBoard()} >New board</button>
            <button>Verify board</button>
            <button>Solve</button>
        </div>
    )
};

export default SudokuOptions;
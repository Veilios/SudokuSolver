import React, { useContext } from 'react';
import confetti from "canvas-confetti";

import { SudokuContext } from '../context/SudokuContext';
import { generateSudoku } from '../context/SudokuContext';
import { Solve } from '../hooks/Solve';


const SudokuOptions = () => {
    const { dispatch, sudoku } = useContext(SudokuContext);

    const Congrats = () => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: {
                x: 0.5,
                y: 1
            }
        });
    }

    const newBoard = () => {
        const n = generateSudoku();

        dispatch({
            type: "NEW_BOARD",
            payload: n
        });
    };

    const answer = () => {
        const bo = Solve(sudoku);
        Congrats();
        console.log(Math.random())

        dispatch({
            type: "SOLVE_BOARD",
            payload: bo
        });
    };

    return (
        <div className='Options' >
            <button onClick={() => newBoard()} >New board</button>
            <button onClick={() => answer()} >Solve with Backtracking</button>
        </div>
    );
};

export default SudokuOptions;
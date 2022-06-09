import React, { createContext, useReducer } from "react";

import generator from "sudoku";


export const generateSudoku = () => {

    const raw = generator.makepuzzle();
    const sBoard = [];

    // Changing values of all numbers in array from (null + 0 - 8) to only (0 - 9)
    for (let i = 0; i < raw.length; i++) {
        if (raw[i] === null) {
            raw[i] = 0;
        } else {
            raw[i] = raw[i] + 1;
        };
    };

    // Seperates array into sub arrays for board
    const Seperator = (board, size) => {
        board = [].concat(...board);

        while (board.length) {
            sBoard.push(
                board.splice(0, size)
            );
        };

        return sBoard;
    };


    Seperator(raw, 9);

    return sBoard
};


const SudokuReducer = (state, action) => {
    switch (action.type) {
        case "FILL_CELL":
            return {
                sudoku: action.payload
            }
        case "NEW_BOARD":
            return {
                sudoku: action.payload
            }
        case "SOLVE_BOARD":
            return {
                sudoku: action.payload,
                solved: true
            }
        case "BACKTRACK":
            return {
                sudoku: action.payload
            }
        default:
            return state;
    }
};

const initialState = {
    sudoku: generateSudoku(),
    solved: false
};

export const SudokuContext = createContext()


export const SudokuProvider = (props) => {
    const [state, dispatch] = useReducer(SudokuReducer, initialState);

    return (
        <SudokuContext.Provider value={{
            sudoku: state.sudoku,
            solved: state.solved,
            dispatch,
        }} >
            {props.children}
        </SudokuContext.Provider>
    )
};

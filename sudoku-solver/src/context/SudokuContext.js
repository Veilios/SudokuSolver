import React, { createContext, useReducer } from "react";

import generator from "sudoku";


const generateSudoku = () => {
    const raw = generator.makepuzzle();
    const result = { rows: [] };

    for (let i = 0; i < 9; i++) {
        const row = { cols: [], index: i };
        for (let j = 0; j < 9; j++) {
            const value = raw[i * 9 + j];
            const col = {
                row: i,
                col: j,
                value: value,
                readonly: value !== null
            };

            row.cols.push(col);
        };

        result.rows.push(row);
    };

    return result;
};

const SudokuReducer = (state, action) => {
    switch (action.type) {
        case "FILL_CELL": 
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

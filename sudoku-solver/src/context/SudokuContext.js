import React, { createContext, useReducer } from "react";

import generator from "sudoku";


// useEffect(() => {

//     const nBoard = generator.makepuzzle();
//     const apiSolution = generator.solvepuzzle(nBoard);
//     const sBoard = [];

//     for (let i = 0; i < nBoard.length; i++) {
//         if (nBoard[i] === null) {
//             nBoard[i] = 0;
//         } else {
//             nBoard[i] = nBoard[i] + 1;
//         }
//     };

//     const Seperator = (items, size) => {
//         items = [].concat(...items);

//         while (items.length) {
//             sBoard.push(
//                 items.splice(0, size)
//             );
//         };

//         return sBoard;
//     };

//     Seperator(nBoard, 9);
//     console.log("generated board", nBoard);
//     console.log("organized board", sBoard);


//     console.log("api solution solver", apiSolution);
//     console.log("Backtracking Method of solving", Solve(sBoard));


// }, []);


export const generateSudoku = () => {
    const raw = generator.makepuzzle();
    const result = { rows: [] };

    for (let i = 0; i < 9; i++) {
        const row = { cols: [], index: i };
        for (let j = 0; j < 9; j++) {
            const value = raw[i * 9 + j];
            const col = {
                row: i,
                col: j,
                value: value === null ? "" : value + 1,
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
        case "NEW_BOARD":
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

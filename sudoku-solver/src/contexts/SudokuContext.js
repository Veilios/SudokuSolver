import React, { useState, createContext } from "react";


const SudokuContext = createContext()

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


const SudokuProvider = ({ children }) => {
    const [sudoku, setSudoku] = useState(generateSudoku());

    return (
        <SudokuContext.Provider value={{ sudoku, generateSudoku }} >
            {children}
        </SudokuContext.Provider>
    );
};


export { SudokuProvider };  
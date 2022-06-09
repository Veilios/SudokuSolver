import { CheckValue } from "./CheckValue";
import { FindEmpty } from "./FindEmpty";



export const Solve = (board) => {
    let emptySpot = FindEmpty(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    if (row === -1) {    // Board is solved
        return board;
    }

    for (let value = 1; value <= 9; value++) {
        if (CheckValue(board, row, col, value)) {
            board[row][col] = value;
            Solve(board);
        }
    }

    if (FindEmpty(board)[0] !== -1)
        board[row][col] = 0;

    
    return board;
}
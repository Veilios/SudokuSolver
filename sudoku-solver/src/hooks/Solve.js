import { CheckValue } from "./Check/CheckValue";
import { FindEmpty } from "./FindEmpty";

export const Solve = (board) => {
    let emptySpot = FindEmpty(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1) {
        return board;
    }

    for (let num = 1; num <= 9; num++) {
        if (CheckValue(board, row, col, num)) {
            board[row][col] = num;
            Solve(board);
        }
    }

    if (FindEmpty(board)[0] !== -1)
        board[row][col] = 0;

    
    return board;
}
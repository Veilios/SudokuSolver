import { findEmpty } from "./FindEmpty";
import { Valid } from "./Valid";


export const Solve = (board) => {
    find = findEmpty(board);

    if (!find) {
        return true;
    } else {
        row, col = find;
    };

    for (let i = 0; i < 9; i++) {
        if (Valid(board, i, (row, col))) {
            board[row][col] = i;

            if (Solve(board)) {
                return true;
            }

            board[row][col] = 0;
        }
    }

    return false;
};

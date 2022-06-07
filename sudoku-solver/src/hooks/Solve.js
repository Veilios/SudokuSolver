import { FindEmpty } from "./FindEmpty";
import { Valid } from "./Valid";


export const Solve = (board) => {
    const finding = FindEmpty(board);
    let [row, col] = []

    if (!finding) {
        return true;
    } else {
       [row, col] = finding;
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

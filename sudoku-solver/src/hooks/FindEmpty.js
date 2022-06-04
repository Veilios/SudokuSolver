export const findEmpty = (board) => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++ ) {
            if (board[i][j] === null) {
                return (i, j) /* row, col */
            };
        };
    };
    return None;
};
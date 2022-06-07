export const CheckCol = (board, column, value) => {
    for (var i = 0; i < board.length; i++) {
        if (board[i][column] === value) {
            return false;
        }
    }

    return true;
};
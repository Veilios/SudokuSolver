export const CheckRow = (board, row, value) => {
    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] === value) {
            return false;
        }
    }

    return true;
}
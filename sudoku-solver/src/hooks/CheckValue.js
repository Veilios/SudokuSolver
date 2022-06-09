const CheckRow = (board, row, value) => {
    for (var i = 0; i < board[row].length; i++) {
        if (board[row][i] === value) {
            return false;
        };
    };

    return true;
};

const CheckCol = (board, col, value) => {
    for (var i = 0; i < board.length; i++) {
        if (board[i][col] === value) {
            return false;
        };
    };

    return true;
};

const CheckCell = (board, row, col, value) => {
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;

    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        };
    };

    return true;
};

export const CheckValue = (board, row, col, value) => {
    if (CheckRow(board, row, value) &&
        CheckCol(board, col, value) &&
        CheckCell(board, row, col, value)) {
        return true;
    };

    return false;
};
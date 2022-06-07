export const CheckCell = (board, row, column, value) => {
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(column / 3) * 3;

    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }

    return true;
};
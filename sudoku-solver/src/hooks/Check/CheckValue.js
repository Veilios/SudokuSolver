import { CheckRow } from "./CheckRow";
import { CheckCol } from "./CheckCol";
import { CheckCell } from "./CheckCell";

export const CheckValue = (board, row, column, value) => {
    if (CheckRow(board, row, value) &&
        CheckCol(board, column, value) &&
        CheckCell(board, row, column, value)) {
        return true;
    }

    return false;
};
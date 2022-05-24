# SudokuSolver
Sudoku Solver Project using Bakctracking Algorithm

 ## Approach
  - Decide 
  - Constraints
  - Goal

  **Sudoku** is a 9 x 9 sqaure grid, where each square sub divides into another 9 squares.
  To win and create a valid board, you must place a number 1 - 9 in each individual square.
  Each number **cannot repeat** within the **row, column, and sub square.**
  If a number repeats, it breaks the board making it no longer valid.
  
  ### Decide
   While iterating throughout the entire board, check to see if a square is empty or contains a number.
   If the square is empty, you can place a number 1 - 9.
   
  ### Constraints
   Must be aware of other numbers already on the field, so to not repeat any numbers in the same row, column,
   or sub sqaure, thus breaking the board.
   
  ### Goal
   Fill the entire board with numbers in every sqaure, without repeating any numbers in the same row, column, and sub sqaure.
   This makes the entire board valid/solved.
   
   

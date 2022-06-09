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


  ### My implmentation of Backtracking Algorithm
    Backtracking is an algorithm for solving problems recursively by trying to construct the solution piece by piece. 
    While adding pieces to the solution, it also removes solutions that don't meet the constraints in place.

    In this project I created a function using this algorithm to solve a sudoku board. Given a sudoku board, 
    this function will begin by checking the first empty cell it can find, and starts checking the row, column,
    and sub sqaure and deciding what number, 1 - 9, can be placed in that cell, without breaking the constraints.
    If no duplicates of that number are found, it will be placed in that cell for the time being. 
    Going through the entire board, eventually it can reach a cell where no numbers work, 
    in which case it will backtrack to the lastknown cell that was altered, and repeating the process with the next valid number.

    I use an API called sudoku, to generate a valid board, so I do not need to check if a board is solvable or not.

   
   # Future features
    - have solve method save to state with every new cell, so to see the backtracking method work live on page 
    - need to provide index somehow on SudokuCell to be able to save to state properly
    - cell breifly flashes red if number inputed cannot be placed there
    - cell breifly flashes green if number is valid

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SudokuProvider } from "./contexts/SudokuContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SudokuProvider>
    <App />
  </SudokuProvider>
);

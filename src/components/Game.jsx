import React, { useState } from "react";
import { Board } from "./Board";


export let Game = (props) => {
    const [state, setState] = useState({
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
      });
    
      const history = state.history;
      console.log(history)
      const current = history[state.stepNumber];

      const winner = calculateWinner(current.squares);
  


    function handleClick(i) {
        setState(prevState => {
            const history = prevState.history.slice(0, prevState.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
              return prevState;
            }
            squares[i] = prevState.xIsNext ? "X" : "O";
            return {
              ...prevState,
              history: history.concat([{ squares: squares }]),
              stepNumber: history.length,
              xIsNext: !prevState.xIsNext
            };
          });
        // const history = state.history.slice(0, state.stepNumber + 1);
        // const current = history[history.length - 1];
        // const squares = current.squares.slice();
        // if (calculateWinner(squares) || squares[i]) {
        //   return;
        // }
        // squares[i] = state.xIsNext ? "c" : "O";
        // setState({
        //   history: history.concat([
        //     {
        //       squares: squares
        //     }
        //   ]),
        //   stepNumber: history.length,
        //   xIsNext: !state.xIsNext
        // });
      }

      function jumpTo(step) {
        setState(prevState => ({
            ...prevState,
            stepNumber: step,
            xIsNext: (step % 2) === 0
          }));
        // setState({
        //   stepNumber: step,
        //   xIsNext: (step % 2) === 0
        // });
      }

      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (state.xIsNext ? "X" : "O");
      }

      return (
        <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
             )
}
import React from "react";
import { MySquare } from "./MySquare";

export let Board = (props) => {
function renderSquare(i) {
        return (
            <MySquare
              value={props.squares[i]}
              onClick={() => props.onClick(i)}
            />
          );
    }
    return  (
            <div>
                <div className = "rowItem">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className = "rowItem">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className= "rowItem">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        );
}
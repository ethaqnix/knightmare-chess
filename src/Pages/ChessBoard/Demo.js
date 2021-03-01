import React, { useState } from "react";
import { useGame } from "./context/GameContext";
import PropTypes from "prop-types";

import Chessboard from "chessboardjsx";
import { arrayToBoard } from "./helpers/positionUtils";
import GameEngine from "./GameEngine";
import { Button } from "@material-ui/core";
import { useCard } from "./context/CardContext";
import { AddPawn } from "./cards/AddPawn";
import ChessBoard from "./components/ChessBoard";

const Demo = (props) => {
  //const [chess, setChess] = useState(new Chess());
  const [game, gameDispatch] = useGame();
  const [cards, cardDispatch] = useCard();

  return (
    <div>
      <GameEngine>
        {({
          position,
          onDrop,
          onMouseOverSquare,
          onMouseOutSquare,
          squareStyles,
          dropSquareStyle,
          onDragOverSquare,
          onSquareClick,
          onSquareRightClick,
        }) => (
          <div>
            <Button
              variant="contained"
              onClick={() => {
                gameDispatch({ type: "card" });
              }}
            >
              HELLO
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                gameDispatch({ type: "card" });
              }}
            >
              RESET
            </Button>
            <div>
              <ChessBoard
                onDrop={onDrop}
                onMouseOverSquare={onMouseOverSquare}
                onMouseOutSquare={onMouseOutSquare}
                squareStyles={squareStyles}
                dropSquareStyle={dropSquareStyle}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
              />
            </div>
            <AddPawn />
          </div>
        )}
      </GameEngine>
    </div>
  );
};

export default Demo;

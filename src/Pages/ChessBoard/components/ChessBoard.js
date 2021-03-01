import Chessboard from "chessboardjsx";
import React from "react";
import { useBoard } from "../context/BoardContext";
import { useGame } from "../context/GameContext";

const ChessBoard = ({
  // onSquareClick,
  onSquareRightClick,
  onMouseOverSquare,
  onMouseOutSquare,
}) => {
  const [
    { hoveredSquares, selectedSquare, onSquareClick },
    callBoard,
  ] = useBoard();
  const [{ engine, selectCard }, callGame] = useGame();

  const onDragOverSquare = (square) => {
    callBoard({ type: "selectSquares", payload: [square] });
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    console.log("onDrop");
    callGame({
      type: "move",
      payload: {
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      },
    });
  };

  return (
    <Chessboard
      id="humanVsHuman"
      width={320}
      position={engine.fen()}
      boardStyle={{
        borderRadius: "5px",
        boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
      }}
      squareStyles={hoveredSquares.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: {
            background: "radial-gradient(circle, #fffc00 36%, transparent 40%)",
            borderRadius: "50%",
          },
        }),
        {
          [selectedSquare]: {
            boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)",
          },
        },
        {}
      )}
      /* dropSquareStyle={selectedSquares.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: {
            boxShadow: "inset 0 0 1px 4px rgb(255, 255, 0)",
          },
        }),
        {}
      )}*/
      onDragOverSquare={onDragOverSquare}
      onSquareClick={onSquareClick}
      onSquareRightClick={onSquareRightClick}
      onDrop={onDrop}
      onMouseOverSquare={onMouseOverSquare}
      onMouseOutSquare={onMouseOutSquare}
    />
  );
};

export default ChessBoard;

import { useState } from "react";
import Card from "../components/Card";
import { useBoard } from "../context/BoardContext";
import { useCard } from "../context/CardContext";
import { useGame } from "../context/GameContext";
import { columns, rows } from "../helpers/positionUtils";
import React from "react";

export const AddPawn = ({}) => {
  const [{ engine }, callGame] = useGame();
  const [_, callBoard] = useBoard();
  const [Cards, callCard] = useCard();
  const [selected, setSelected] = useState(false);

  const genereNewFen = (move) => {};

  const getOptions = () => {
    const board = engine.board();
    let options = [];
    board.forEach((row, rowIndex) => {
      row.map((square, columnIndex) => {
        if (!square && true) {
          options.push(`${columns[columnIndex]}${rows[rowIndex]}`);
        }
      });
    });

    //engine.validate_fen();
    callBoard({ type: "hoverSquares", payload: options });
  };

  const removeOptions = () => {
    callBoard({ type: "hoverSquares", payload: [] });
  };
  const select = () => {
    console.log(selected);
    if (!selected) {
      setSelected(true);
      callBoard({
        type: "setClickListener",
        payload: (square) => {
          setSelected(false);
          engine.put({ type: engine.PAWN, color: engine.turn() }, square);
          callGame({ type: "switchTurn" });
          callBoard({
            type: "resetClickListener",
          });
          removeOptions();
        },
      });
    } else {
      setSelected(false);
      callBoard({
        type: "resetClickListener",
      });
    }
  };

  return (
    <Card
      selected={selected}
      title={"Add pawn"}
      onMouseEnter={getOptions}
      onMouseOut={!selected && removeOptions}
      onClick={select}
    />
  );
};

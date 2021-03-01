import { CardActions } from "@material-ui/core";
import Chess from "chess.js";
import * as React from "react";

const GameStateContext = React.createContext();

const GameDispatchContext = React.createContext();

const initialState = {
  engine: new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"),
  fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
};

function GameReducer(state, { type, payload }) {
  switch (type) {
    case "plop": {
      payload(state.engine);
    }
    case "move": {
      state.engine.move(payload);
      return {
        ...state,
        fen: state.engine.fen(),
      };
    }

    case "setBoard": {
      state.engine.load(payload);
      return {
        ...state,
        fen: state.engine.fen(),
      };
    }
    case "switchTurn": {
      const [board, side, castles, ...restFen] = state.engine.fen().split(" ");
      const newFen = `${board} ${
        side === "w" ? "b" : "w"
      } ${castles} ${"-"} 0 1`;
      state.engine.load(newFen);
      return {
        ...state,
        fen: state.engine.fen(),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = React.useReducer(GameReducer, initialState);

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
}

function useGameState() {
  const context = React.useContext(GameStateContext);

  if (context === undefined) {
    throw new Error("useGameState must be used within a GameProvider");
  }

  return context;
}

function useGameDispatch() {
  const context = React.useContext(GameDispatchContext);

  if (context === undefined) {
    throw new Error("useGameDispatch must be used within a GameProvider");
  }

  return context;
}

function useGame() {
  return [useGameState(), useGameDispatch()];
}

export { GameProvider, useGame };

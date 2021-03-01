import { CardActions } from "@material-ui/core";
import Chess from "chess.js";
import * as React from "react";

const BoardStateContext = React.createContext();

const BoardDispatchContext = React.createContext();

const initialState = {
  hoveredSquares: [],
  selectedSquare: null,
  onSquareClick: () => {},
};

function BoardReducer(state, { type, payload }) {
  switch (type) {
    case "hoverSquares": {
      return {
        ...state,
        hoveredSquares: payload,
      };
    }
    case "selectSquares": {
      return {
        ...state,
        selectedSquares: payload,
      };
    }
    case "setClickListener": {
      return {
        ...state,
        onSquareClick: payload,
      };
    }
    case "resetClickListener": {
      return {
        ...state,
        onSquareClick: initialState.onSquareClick,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function BoardProvider({ children }) {
  const [state, dispatch] = React.useReducer(BoardReducer, initialState);

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}

function useBoardState() {
  const context = React.useContext(BoardStateContext);

  if (context === undefined) {
    throw new Error("useBoardState must be used within a BoardProvider");
  }

  return context;
}

function useBoardDispatch() {
  const context = React.useContext(BoardDispatchContext);

  if (context === undefined) {
    throw new Error("useBoardDispatch must be used within a BoardProvider");
  }

  return context;
}

function useBoard() {
  return [useBoardState(), useBoardDispatch()];
}

export { BoardProvider, useBoard };

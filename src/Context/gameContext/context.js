import React, { useReducer } from "react";
import { initialState, GameReducer } from "./reducer";

const GameStateContext = React.createContext();
const GameDispatchContext = React.createContext();

export function useGameState() {
  const context = React.useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameProvider");
  }

  return context;
}

export function useGameDispatch() {
  const context = React.useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error("useGameDispatch must be used within a GameProvider");
  }

  return context;
}

export const useGame = () => {
  const stateContext = React.useContext(GameStateContext);
  const dispatchContext = React.useContext(GameDispatchContext);
  if (stateContext === undefined || dispatchContext === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return [stateContext, dispatchContext];
};

export const GameProvider = ({ children }) => {
  const [user, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameStateContext.Provider value={user}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
};

import * as React from "react";

const CardStateContext = React.createContext();

const CardDispatchContext = React.createContext();

const initialState = {
  poll: ["addPawn"],
  hand: [],
};

function CardReducer(state, { type, payload }) {
  switch (type) {
    case "draw": {
      if (!state.poll.length) return state;
      const index = Math.floor(Math.random() * state.poll.length);
      return {
        hand: [...state.hand, state.poll[index]],
        poll: state.poll.filter((_, i) => i === index),
      };
    }

    case "play": {
      if (!state.hand.length) return state;

      return {
        ...state,
        //        hand: [...state.hand, poll[index]],
        //poll: state.poll.filter((_, i) => i === index),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

function CardProvider({ children }) {
  const [state, dispatch] = React.useReducer(CardReducer, initialState);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

function useCardState() {
  const context = React.useContext(CardStateContext);

  if (context === undefined) {
    throw new Error("useCardState must be used within a CardProvider");
  }

  return context;
}

function useCardDispatch() {
  const context = React.useContext(CardDispatchContext);

  if (context === undefined) {
    throw new Error("useCardDispatch must be used within a CardProvider");
  }

  return context;
}

function useCard() {
  return [useCardState(), useCardDispatch()];
}

export { CardProvider, useCard };

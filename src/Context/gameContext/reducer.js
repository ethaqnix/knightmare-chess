import React, { useState, useReducer } from "react";

export const initialState = {
  state: "pending",
  opponent: null,
  room: null,
  fen: null,
};

export const GameReducer = (initialState, action) => {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

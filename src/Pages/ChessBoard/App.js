import React from "react";
import { BoardProvider } from "./context/BoardContext";
import { CardProvider } from "./context/CardContext";
import { GameProvider } from "./context/GameContext";
import Demo from "./Demo";

function App() {
  return (
    <div>
      <CardProvider>
        <GameProvider>
          <BoardProvider>
            <Demo />
          </BoardProvider>
        </GameProvider>
      </CardProvider>
    </div>
  );
}

export default App;

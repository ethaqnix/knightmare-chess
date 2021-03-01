import React from "react";
import { GameProvider } from "../../Context/gameContext";
import { useGame } from "./context/GameContext";
import WaitingForOpponent from "./WaitingForOpponent";
import App from "./App";

function ChessBoard() {
  const [game, gameDispatch] = useGame();
  //console.log(ActionheroWebsocketClient);
  let client = new ActionheroWebsocketClient({ url: "http://localhost:8080" });

  return (
    <div>
      <header>
        <script src="/public/ActionheroWebsocketClient.min.js" />
      </header>
      <GameProvider>
        {game.status === "pending" && <WaitingForOpponent />}
        {game.status === "started" && <App></App>}
      </GameProvider>
    </div>
  );
}

export default ChessBoard;

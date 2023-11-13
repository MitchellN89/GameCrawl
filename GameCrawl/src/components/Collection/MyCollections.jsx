import CollectionNavBar from "./CollectionNavBar";
import GameFeature from "./GameFeature/GameFeature";
import { useUserContext } from "../../context/UserProvider";

import { useEffect, useState } from "react";

export default function MyCollections() {
  const [user] = useUserContext();
  const [currentGameId, setCurrentGameId] = useState(null);
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${currentGameId}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "", // Please enter your own key here from RapidAPI
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentGame(data);
      });
  }, [currentGameId]);

  return (
    <>
      <CollectionNavBar
        currentGameId={currentGameId}
        user={user}
        setCurrentGameId={setCurrentGameId}
      />
      {currentGame && (
        <GameFeature
          setCurrentGameId={setCurrentGameId}
          currentGame={currentGame}
        ></GameFeature>
      )}
    </>
  );
}

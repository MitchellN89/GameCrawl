import { createContext, useContext, useEffect, useState } from "react";

const AllGamesContext = createContext();

export function AllGamesProvider({ children }) {
  const [allGames, setAllGames] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32b9ac705fmshfe912da10fd865cp1b780bjsn8a6c8659eee3",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setAllGames(
            data.sort((a, b) => {
              return a.title.localeCompare(b.title);
            })
          );
          console.log(data);
          // ---
          const cat = [];
          data.forEach((game) => {
            if (!cat.includes(game.genre.trim())) {
              cat.push(game.genre.trim());
            }
          });
          console.log(
            cat.sort((a, b) => {
              return a.localeCompare(b);
            })
          );
          // ---
        }
      });

    return () => {
      console.log("AllGamesContext Cleanup");
      ignore = true;
    };
  }, []);

  return (
    <AllGamesContext.Provider value={{ allGames }}>
      {children}
    </AllGamesContext.Provider>
  );
}

export function useAllGamesContext() {
  return useContext(AllGamesContext);
}
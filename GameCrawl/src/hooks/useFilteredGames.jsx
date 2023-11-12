import { useState } from "react";

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default function useFilteredGames(allGames) {
  const [filteredGames, setFilteredGames] = useState({ data: allGames });

  function resetFilteredGames() {
    setFilteredGames({ data: allGames });
    scrollToTop();
  }

  function handleFilteredGames(filterBy, ...values) {
    const data = allGames.filter((game) => {
      for (let value of values) {
        if (filterBy === "id") {
          if (game.id == value) {
            return true;
          }
        } else if (
          game[filterBy]
            .toString()
            .toLowerCase()
            .includes(value.toString().toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
    setFilteredGames({ data, filterBy, value: values[0] });
    scrollToTop();
  }

  return [filteredGames, handleFilteredGames, resetFilteredGames];
}

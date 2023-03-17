// convert playerData from an object to an array
export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

// add a wins key to every player
export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // calculating number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    }, 0);

    // assigns the value to the  wins key
    player.wins = currentWins;

    return player

  });

}
const GET_GAMES = 'games/getGames'

const getGames = (games) => {
  return {
    type: GET_GAMES,
    games
  }
}

export const getAllGames = () => async (dispatch) => {
  const res = await fetch('/api/games/')

  const data = await res.json()

  dispatch(getGames(data.games))

  return data

}

const gamesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_GAMES: {

      newState = { ...state }
      const games = action.games
      games.forEach((game) => {
        const releaseDate = (new Date(game.release_date)).toLocaleDateString({}, {dateStyle: 'short'})
        console.log(game.release_date, releaseDate)
        if (newState[releaseDate]) newState[releaseDate].push(game)
        else {
        newState[releaseDate] = [game]
        }
      })
      return newState
    }
    default:
      return state
  }
}

export default gamesReducer;

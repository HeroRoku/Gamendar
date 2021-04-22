import moment from 'moment'

const GET_GAMES = 'games/getGames'

const GET_GAME = 'games/getGame'

const getGames = (games) => {
  return {
    type: GET_GAMES,
    games
  }
}

const getGame = (game) => {
  return {
    type: GET_GAME,
    payload: game
  }
}

export const getAllGames = () => async (dispatch) => {
  const res = await fetch('/api/games/')

  const data = await res.json()

  dispatch(getGames(data.games))

  return data
}

export const getGameByDay = (day) => async (dispatch) => {
  console.log(day)
  const res = await fetch(`/api/games/${day}`)

  const data = res.json()

  dispatch(getGame(data.games))

  return data
}

const gamesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_GAMES: {

      newState = {}
      const games = action.games
      games.forEach((game) => {
        // const releaseDate = (new Date(game.release_date)).toLocaleDateString({}, { dateStyle: 'short' })
        const releaseDate = moment(game.release_date).utc().format('M/D/YY')
        if (newState[releaseDate]) newState[releaseDate].push(game)
        else {
          newState[releaseDate] = [game]
        }
      })
      return newState
    }
    case GET_GAME: {

      newState = { ...state }
      const game = action.payload
      newState[game] = game
      return newState
    }
    default:
      return state
  }
}

export default gamesReducer;

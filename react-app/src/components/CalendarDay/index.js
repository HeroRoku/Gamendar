import React from 'react';
import {useSelector} from 'react-redux'

const CalendarDay = ({month, day, year}) => {
    // const [games, setGames] = useState([])
    const today = (new Date(`${month+1}/${day}/${year}`)).toLocaleDateString({}, { dateStyle: 'short' })
    let loadedGames = useSelector(state => state.games[today])
    
    if (!loadedGames) loadedGames = null

    // console.log(games)
    return (loadedGames && (
        <div className='CalendarDay'>
            {day}
        </div>
    )) || (
    <div className='CalendarDay'>
        {day}
    </div>
    )
}

export default CalendarDay
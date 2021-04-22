import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllGames } from '../../store/games';

const CalendarDay = ({ month, day, year }) => {
    const today = (new Date(`${month + 1}/${day}/${year}`)).toLocaleDateString({}, { dateStyle: 'short' })
    let games = useSelector(state => state.games[today])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGames())

    }, [dispatch])


    if (!games) games = null

    return (games && (
        <div className='CalendarDay'>
            {/* <div className='CalDate'>{day}</div> */}
            {games.map(game => {
                console.log(game)
                return (
                    <div className='CalendarGame' style={{ 'background-image': `url(${game.game_art})` }}>
                        <div className='GameTitle'>{game.name}</div>
                    </div>)
            })}
        </div >
    )) || (
            <div className='CalendarDay'>
                {day}
            </div>
        )
}

export default CalendarDay
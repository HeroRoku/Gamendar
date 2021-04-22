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

    // console.log(games)

    return (games && (
        <div className='CalendarDay'>
            {day}
            <div>GAME DAY
                <div className='GameTitle'>
                </div>
                <div className='GameArt'></div>
            </div>
        </div>
    )) || (
            <div className='CalendarDay'>
                {day}
            </div>
        )
}

export default CalendarDay
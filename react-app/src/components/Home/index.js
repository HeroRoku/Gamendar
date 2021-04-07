import React, { useState, useEffect } from 'react';
import moment from 'moment'
import './Home.css';
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames } from '../../store/games'


const Home = () => {
  const dispatch = useDispatch()
  const games = useSelector((state) => Object.values(state.games))
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (games) {
      dispatch(getAllGames()).then(res => setIsLoaded(true))
    }

  }, [dispatch])

  if (isLoaded) {
    let release = new Date(games[4].release_date)
    // console.log(release.getDate())
    console.log(moment(release).format('D'))
  }


  const days = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1]

  return (
    isLoaded && (
      <div className='CalendarContainer'>
        <div className='Header'>
          <h1>APRIL 2021</h1>
        </div>
        <div className='Calendar'>
          <div className='CalendarHeader'>
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          <div className='CalendarWeek'>
            {days.map(day => (<div className='CalendarDay'>{day}</div>))}
            {/* {console.log('teST') } */}
          </div>
        </div>
      </div>
    )
  )
}

export default Home;

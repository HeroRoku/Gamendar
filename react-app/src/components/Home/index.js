import React from 'react';
import './Home.css';


const Home = () => {

  const days = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1]


  return (
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
          {days.map(day => {
            return (
              <div className='CalendarDay'>{day}</div>)
          }
          )}
          {/* <div className='CalendarDay'>29</div>
          <div className='CalendarDay'>30</div>
          <div className='CalendarDay'>31</div>
          <div className='CalendarDay'>1</div> */}
        </div>
      </div>
    </div>
  )
}

export default Home;

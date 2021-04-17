import React, { useState, useEffect } from 'react';
import moment from 'moment'
import './Home.css';
import CalendarDay from '../CalendarDay'



const Home = () => {
  const today = new Date()
  const [days, setDays] = useState([])
  const [month, setMonth] = useState(today.getMonth())
  const [monthHeader, setMonthHeader] = useState('')


  const nextMonth = () => {
    setMonth(currentMonth => currentMonth + 1)
  }
  const prevMonth = () => {
    setMonth(currentMonth => currentMonth - 1)
  }
    
  useEffect(() => {
    const momentMonth = moment().month(month)
    const bufferDays = []
    const startOfMonth = moment().month(month).startOf('month')
    const endOfMonth = moment().month(month).endOf('month')
    const startOfMonthDay = startOfMonth.day()
    const startOfMonthDate = startOfMonth.date()
    const endOfMonthDate = endOfMonth.date()

    setMonthHeader(momentMonth.format('MMMM YYYY'))
    
    for (let i = startOfMonthDate; i <= endOfMonthDate; i++) {
      bufferDays.push(i)
    }

    const prevMonth = endOfMonth.subtract(1, 'month').endOf('month').date()

    for ( let i = 0; i < startOfMonthDay; i++ ) {
      bufferDays.unshift(prevMonth - i)
    }


    setDays(bufferDays)

  }, [month])

  return (
      <div className='CalendarContainer'>
        <div className='Header'>
          <h1>{monthHeader}</h1>
          <button onClick={prevMonth}>PREV</button>
          <button onClick={nextMonth}>NEXT</button>
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
            {days.map((day, idx) => {
    
                return (<CalendarDay key={idx} month={month} day={day}year={monthHeader.split(' ')[1]}/>)
              })
              }
          </div>
        </div>
      </div>
    )
}

export default Home;

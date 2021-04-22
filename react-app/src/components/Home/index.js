import React, { useState, useEffect } from 'react';
import moment from 'moment'
import './Home.css';
import CalendarDay from '../CalendarDay'



const Home = () => {
  const today = new Date()
  const [days, setDays] = useState([])
  const [prevDays, setPrevDays] = useState([])
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
    const calDays = []
    const prevCalDays = []
    const startOfMonth = moment().month(month).startOf('month')
    const endOfMonth = moment().month(month).endOf('month')
    const startOfMonthDay = startOfMonth.day()
    const startOfMonthDate = startOfMonth.date()
    const endOfMonthDate = endOfMonth.date()


    setMonthHeader(momentMonth.format('MMMM YYYY'))

    for (let i = startOfMonthDate; i <= endOfMonthDate; i++) {
      calDays.push(i)
    }

    const prevMonth = endOfMonth.subtract(1, 'month').endOf('month').date()

    for (let i = 0; i < startOfMonthDay; i++) {
      prevCalDays.unshift(prevMonth - i)
    }


    setDays(calDays)
    setPrevDays(prevCalDays)

  }, [month])

  return (
    <div className='CalendarContainer'>
      <div className='Header'>
        <button onClick={prevMonth}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1>{monthHeader}</h1>
        <button onClick={nextMonth}>
          <i className="fas fa-arrow-right"></i>
        </button>
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
          {prevDays.map((day, idx) => {

            return (<CalendarDay key={idx} month={month - 1} day={day} year={monthHeader.split(' ')[1]} />)
          })}
          {days.map((day, idx) => {

            return (<CalendarDay key={idx} month={month} day={day} year={monthHeader.split(' ')[1]} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default Home;

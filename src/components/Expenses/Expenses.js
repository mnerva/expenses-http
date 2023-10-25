import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

export const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState('2023')

  const addExpenseFilterHandler = (expenseFilter) => {
    console.log('In Expenses.js')
    console.log(expenseFilter)
    setExpenseFilter(expenseFilter)
  }

  return (
    <Card className='expenses'>
        <ExpensesFilter onAddExpenseFilter={addExpenseFilterHandler}/>
          {props.expenses.map((ob) => {
            if (ob.date.getFullYear().toString() === expenseFilter){
              return (<ExpenseItem date={ob.date} title={ob.title} price={ob.price} id={ob.id}/>)
            } else{
              return null}
          })}
    </Card>
  )
}
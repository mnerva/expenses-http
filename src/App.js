import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
      {
          id: 'e1',
          date: new Date(2023, 0, 10),
          title:'New book',
          price: 30.99
      },
      {
          id: 'e2',
          date: new Date(2023, 0, 5),
          title:'Icecream',
          price: 3.99
      }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
    console.log(expense)

  }

  console.log(expenses)

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
  )
} 

export default App 
import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Error from "./components/UI/Error"

const App = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)
  
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true)
      try{
        const response = await fetch('http://localhost:3008/expenses')
        const responseData = await response.json()
        if(!response.ok){
          throw new Error('Failed fetching data')
        }
        console.log(responseData)
        setExpenses(responseData.expenses)
      } catch (error) {
        setError({
          title: 'An error occured!',
          message: 'Failed fetching expenses data, please try again later.'
        })
        setShowError(true)
      }
      setIsFetching(false)
    }
    getExpenses()
    console.log(expenses)
  }, [])

  console.log(error)
  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className="App">
      { showError && (
        <Error 
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />)
      }
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses 
          expenses={expenses}
          isLoading={isFetching}
        ></Expenses>
    </div>
  )
} 

export default App 
import React, { useState, useRef } from 'react'
import "./ExpenseForm.css"

import Error from "../UI/Error";

const ExpenseForm = (props) => {
    /*const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')*/

    const [error, setError] = useState(null)

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()

    /*const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }*/

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        if(enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0){
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid title or amount or date (non-empty values)'
                })
            return
        }

        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''
        // setEnteredTitle
        // setEnteredAmount
        // setEnteredDate
        props.setFormEdit(false)
    }
    const errorHandler = () => {
        setError(null)
    }
    console.log(error)


  return (
    <Fragment>
        { error && (
            <Error
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />)
        }
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input 
                            type="text"
                            id="title"
                            ref={titleInputRef}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input 
                            type="number" 
                            min="0.01" 
                            step="0.01"
                            id="amount"
                            ref={amountInputRef}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input 
                            type="date" 
                            min="2023-01-18" 
                            max="2025-12-31"
                            id="date"
                            ref={dateInputRef}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                    <button onClick={() => props.setFormEdit(false)}>Cancel</button>
                </div>
            </form>
    </Fragment>
  )
}

export default ExpenseForm
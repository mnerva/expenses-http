import React, { useState } from 'react';
import '../NewExpense/ExpenseForm.css'

const ExpenseForm = () => {
	// const [enteredTitle, setEnteredTitle] = useState(initialState: '')
	// const [enteredTitle, setEnteredAmount] = useState(initialState: '')
	// const [enteredTitle, setEnteredDate] = useState(initialState: '')
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	})
	console.log(userInput)

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value)
	}

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value)
	}
	const submitHandler = (event) => {
		event.preventDefault()
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredData)
		}
		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}


	return(
		<form onSubmit={submitHandller}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" />
					onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="1" step="1" onChange={amountChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
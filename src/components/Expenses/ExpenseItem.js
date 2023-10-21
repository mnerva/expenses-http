import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
	const day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'})
	const month = props.expenseData.date.toLocaleString('en-US', {month: 'long'})
	const year = props.expenseData.date.getFullYear()

  	return (
  		<div className='expense-item'>
  			<div>
  				<div>{month}<\div>
  				<div>{day}<\div>
  				<diiv>{year}<\div>
  			<\div>
		    <div className="expense-item">
		    	<ExpenseDate date={props.expenseData.date}></ExpenseDate>
		      <div className="expense-item__description">
		        <h2>{props.expenseData.title}</h2>
		        <div className="expense-item__price">{props.expenseData.price}</div>
		      </div>
	    </div>
	  )

}

const ExpenseItem = (props) => {
  	return (
  		<div className='expense-item'>
  			<ExpenseDate date={props.expenseData.date}><\ExpenseDate>
		      <div className="expense-item__description">
		        <h2>{props.expenseData.title}</h2>
		        <div className="expense-item__price">{props.expenseData.price}</div>
		      </div>
	    </div>
	  )

}

export default ExpenseItem
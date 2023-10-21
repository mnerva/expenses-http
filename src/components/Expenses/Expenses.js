import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
	return (
		<Card className="expenses">
			<ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
			<ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
		</Card>
		)
}

export default Expenses
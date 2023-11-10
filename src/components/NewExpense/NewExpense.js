import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {
  const [formEdit, setFormEdit] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    // Close form
    setFormEdit(false);
  }

    const startEditHandler = () => {
      // Open form
      setFormEdit(true)
    }

    const stopEditHandler = () => {
      // Close form
      setFormEdit(false)
    }

  return (
    <div className='new-expense'>
        {!formEdit && <button onClick={startEditHandler}>Add New Expense</button>}
        {formEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setFormEdit={setFormEdit} onCancel={stopEditHandler}/>}
    </div>
  )
}

export default NewExpense
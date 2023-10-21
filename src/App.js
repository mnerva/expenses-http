import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
        {
            date: new Date(2023, 0, 10),
            title:'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title:'Icecream',
            price: 3.99
        }
    ]

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
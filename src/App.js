import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const someData = [
  {
    id: "e1",
    title: "Air Conditioner",
    amount: 124.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Gaming PC",
    amount: 799.49,
    date: new Date(2020, 4, 12),
  },
  {
    id: "e3",
    title: "Bugatti",
    amount: 2247.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "King Size Bed (Gold)",
    amount: 450.09,
    date: new Date(2019, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(someData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }; 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

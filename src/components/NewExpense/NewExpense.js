import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsFormVisible(false); // Hide the form after submission
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  const hideFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler} // Pass a function to hide the form
        />
      )}
    </div>
  );
};

export default NewExpense;


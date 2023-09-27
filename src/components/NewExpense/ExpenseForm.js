import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const itemData = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };
    props.onSubmitFormHandler(itemData);
    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
    props.onCloseFormHandler();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={expenseTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            step="0.1"
            min="0.1"
            id="amount"
            name="amount"
            value={expenseAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            id="date"
            name="date"
            value={expenseDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCloseFormHandler}>Cancel</button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

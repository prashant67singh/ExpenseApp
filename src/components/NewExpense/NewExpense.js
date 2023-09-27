import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditinForm, setFormEditing] = useState("false");
  const submitFormHandler = (newExpenseData) => {
    const newData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    console.log(newData);
    props.onAddExpense(newData);
  };
  const startEditingFormHandler = () => {
    setFormEditing("true");
  };

  const stopEditingFormHandler = () => {
    setFormEditing("false");
  }

  return (
    <div className="new-expense">
      {isEditinForm === "false" ? (
        <button onClick={startEditingFormHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onSubmitFormHandler={submitFormHandler}
          onCloseFormHandler={stopEditingFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;

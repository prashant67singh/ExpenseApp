import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterExpenseFunc = (selectedYear) => {
    return props.expenses.filter((element) => {
      return element.date.getFullYear().toString() === selectedYear;
    });
  };
  let newFilteredExpenseArr = filterExpenseFunc(filteredYear);
  const filterChange = (newSelectedYear) => {
    setFilteredYear(newSelectedYear);
  };

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        dataItem={props.expenses}
        onExpenseFilterChange={filterChange}
      ></ExpenseFilter>
      <ExpenseChart expense={newFilteredExpenseArr}></ExpenseChart>
      <ExpenseList item={newFilteredExpenseArr}/>
    </div>
  );
}
export default Expenses;

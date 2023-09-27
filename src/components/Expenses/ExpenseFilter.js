import "../Expenses/ExpenseFilter.css";

const ExpenseFilter = (props) => {
  let dateArr = props.dataItem.map((element) =>
    new Date(element.date).getFullYear()
  );
  dateArr = [...new Set(dateArr)];
  const optionChangeHandler = (event) => {
    props.onExpenseFilterChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={optionChangeHandler} value={props.selectedYear}>
          {dateArr.map((year) => {
            return <option key={Math.random().toString()}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

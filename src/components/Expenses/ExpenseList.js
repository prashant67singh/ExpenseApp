import "../Expenses/ExpenseList.css";

import ExpenseItem from "./ExpenseItem";


const ExpenseList = (props) => {

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((element) => {
        return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            date={element.date}
            price={element.amount}
          />
        );
      })}
    </ul>
  );
};


export default ExpenseList;
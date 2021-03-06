import React from "react";

function BudgetIncomeTableRow(props) {
  return (
    <tr>
        <td>{props.type}</td>
        <td>{props.value}</td>
        <button className="lightshadow" onClick={() => props.remove(props.id)}>-</button>
    </tr>
    );
}

export default BudgetIncomeTableRow;
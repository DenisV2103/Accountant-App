import React, { useEffect, useState } from "react";

function Balance({ newValues }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (newValues) {
      setValues(newValues);
    }
  }, [newValues]);

  return (
    <div>
      <div>
        <div className="yourBalance">YOUR BALANCE </div>
        <div className="yourMoney">{`$ ${values.total}`}</div>
      </div>
      <div className="your-balance">
        <div className="income">
          <div>LAST INCOME</div>
          <div className="income-num">{`$ ${values.income}`}</div>
        </div>
        <div className="expense">
          <div>EXPENSE</div>
          <div className="expense-num">{`$ ${values.expense}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Balance;

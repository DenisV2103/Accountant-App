import React from "react";
import Transaction from "./Transaction";
import TransactionForms from "./TransactionForms";

function TransactionList({ addTransaction, transactionsProp }) {
  return (
    <>
      <div className="history">History</div>
      <div className="transaction-list-container">
        {transactionsProp && transactionsProp.length
          ? transactionsProp.map((transaction) => (
              <Transaction
                key={transaction.id}
                id={transaction.id}
                texto={transaction.texto}
                time={transaction.time}
                type={transaction.type}
              />
            ))
          : false}
      </div>
      <TransactionForms onSubmit={addTransaction} />
    </>
  );
}

export default TransactionList;

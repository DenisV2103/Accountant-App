import { useState, useEffect } from "react";
import "./App.css";
import Balance from "./components/Js/Balance";
import TransactionList from "./components/Js/TransanctionList";

const balanceFromLocalStore = JSON.parse(localStorage.getItem("balance") || []);
function App() {
  const [transactions, setTransaction] = useState([]);
  const [balance, setBalance] = useState(balanceFromLocalStore);

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  const addTransaction = (transaction) => {
    if (transaction.type === "EXPENSE" && balance.total < 1) {
    }

    if (transaction.texto.trim()) {
      transaction.texto = transaction.texto.trim();
      const transactionUpdate = [transaction, ...transactions];
      setBalance({
        total:
          transaction.type.trim() === "I"
            ? (balance.total += +transaction.texto.trim())
            : transaction.type.trim() === "E" && balance.total < 1
            ? 0
            : balance.total - transaction.texto.trim(),
        income:
          transaction.type.trim() === "I"
            ? (balance.income = transaction.texto.trim())
            : balance.income,
        expense:
          transaction.type.trim() === "E" && balance.total < 1
            ? 0
            : transaction.type.trim() === "I"
            ? balance.expense
            : (balance.expense += +transaction.texto.trim()),
      });
      setTransaction(transactionUpdate);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">Expense Tracker</div>
        <Balance newValues={balance} />
        <TransactionList
          transactionsProp={transactions}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
}

export default App;

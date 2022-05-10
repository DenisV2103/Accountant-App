import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../Css/NewTransaction.css";

function TransactionForms(props) {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");

  const manejartipo = (e) => {
    setType(e.target.value);
  };

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      texto: input,
      time: new Date().toLocaleDateString(),
      type:
        type.toUpperCase().trim() === "INCOME"
          ? "I"
          : type.toUpperCase().trim() === "EXPENSE"
          ? "E"
          : "Undefine",
    };
    props.onSubmit(newTransaction);
  };

  return (
    <form className="transaction-form" onSubmit={manejarEnvio}>
      <div className="new-transaction">
        <h3>Bills description:</h3>

        <input
          className="input"
          type="text"
          placeholder="Enter type"
          name="type"
          onChange={manejartipo}
        ></input>
        <h3>Bills value:</h3>
        <input
          className="input"
          type="number"
          placeholder="Enter Text"
          name="text"
          onChange={manejarCambio}
        ></input>
        <div>
          <button className="Button">Add Transaction</button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForms;

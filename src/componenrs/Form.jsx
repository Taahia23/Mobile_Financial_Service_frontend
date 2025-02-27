import React, { useState } from "react";
import axios from "axios";
import "../styles/Form.css";

const TransactionForm = ({ type }) => {
  const [receiverMobile, setReceiverMobile] = useState("");
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  const handleTransaction = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }

      let requestBody = { amount };

      if (type === "cash-in") {
        requestBody.agentMobile = receiverMobile;
      } else {
        requestBody.receiverMobile = receiverMobile;
      }

      const url = `https://backend-owff68ik2-taahia-tahsins-projects.vercel.app/api/transactions/${type}`;
      const { data } = await axios.post(url, requestBody, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(`${type.replace("-", " ")} successful!`);
      setReceiverMobile("");
      setAmount("");

      window.location.reload();

    } catch (error) {
      console.error("Transaction error:", error);
      alert("Error: " + error.response?.data?.message);
    }
  };

  return (

    <form className="transaction-form" onSubmit={handleTransaction}>
      <h3>{type.replace("-", " ")}</h3>
      <div>
        <input
        type="text"
        placeholder="Receiver Mobile"
        value={receiverMobile}
        onChange={(e) => setReceiverMobile(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;

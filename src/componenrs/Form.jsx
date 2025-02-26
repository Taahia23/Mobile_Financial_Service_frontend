import { useState } from "react";
import axios from "axios";

const TransactionForm = ({ type }) => {
  const [receiverMobile, setReceiverMobile] = useState("");
  const [amount, setAmount] = useState("");
  const token = localStorage.getItem("token");

  const handleTransaction = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/api/transactions/${type}`;
      await axios.post(url, { receiverMobile, amount }, { headers: { Authorization: `Bearer ${token}` } });

      alert(`${type.replace("-", " ")} successful!`);
      setReceiverMobile("");
      setAmount("");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleTransaction}>
      <h3>{type.replace("-", " ")}</h3>
      <input type="text" placeholder="Receiver Mobile" value={receiverMobile} onChange={(e) => setReceiverMobile(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;

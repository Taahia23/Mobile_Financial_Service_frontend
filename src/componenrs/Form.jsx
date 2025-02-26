import { useState } from "react";
import axios from "axios";

const TransactionForm = ({ type }) => {
  const [receiverMobile, setReceiverMobile] = useState("");
  const [amount, setAmount] = useState("");
 

  return (
    <form onSubmit={handleTransaction}>
      <input type="text" placeholder="Receiver Mobile" value={receiverMobile} onChange={(e) => setReceiverMobile(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;

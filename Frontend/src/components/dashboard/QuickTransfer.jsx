import React, { useState } from "react";
import toast from "react-hot-toast";

const QuickTransfer = () => {

  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {

    if (!account || !amount) {
      toast.error("All fields are required");
      return;
    }

    if (amount <= 0) {
      toast.error("Invalid amount");
      return;
    }

    toast.success("Transfer Successful (UI only)");
  };

  return (
    <div className="card">

      <h3>Quick Transfer</h3>

      <input
        placeholder="Enter Account Number"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
      />

      <button style={btnStyle} onClick={handleTransfer}>
        Send Money
      </button>

    </div>
  );
};

const inputStyle = {
  width:"100%",
  padding:"10px",
  margin:"10px 0",
  border:"1px solid #E5E7EB",
  borderRadius:"6px"
};

const btnStyle = {
  width:"100%",
  padding:"10px",
  background:"#2563EB",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};

export default QuickTransfer;
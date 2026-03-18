import React from "react";

const QuickTransfer = () => {

  return (
    <div className="card">

      <h3>Quick Transfer</h3>

      <input
        placeholder="Enter Account Number"
        style={inputStyle}
      />

      <input
        placeholder="Amount"
        style={inputStyle}
      />

      <button style={btnStyle}>
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
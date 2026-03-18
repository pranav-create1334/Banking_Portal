import React from "react";

const AccountCard = ({ type, balance, number }) => {
  return (
    <div className="card" style={{flex:1, minWidth:"250px"}}>

      <h4>{type}</h4>

      <h2 style={{color:"#2563EB"}}>{balance}</h2>

      <p style={{color:"#6B7280"}}>{number}</p>

    </div>
  );
};

export default AccountCard;
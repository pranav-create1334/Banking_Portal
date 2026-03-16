import React from "react";

const RecentTransactions = () => {

  const data = [
    {id:1,name:"Amazon",amount:"₹1200"},
    {id:2,name:"Swiggy",amount:"₹450"},
    {id:3,name:"Electric Bill",amount:"₹2000"}
  ];

  return (

    <div className="card">

      <h3>Recent Transactions</h3>

      {data.map(t=>(
        <div key={t.id} style={{
          display:"flex",
          justifyContent:"space-between",
          padding:"12px 0",
          borderBottom:"1px solid #F1F5F9"
        }}>
          <span>{t.name}</span>
          <span>{t.amount}</span>
        </div>
      ))}

    </div>

  );
};

export default RecentTransactions;
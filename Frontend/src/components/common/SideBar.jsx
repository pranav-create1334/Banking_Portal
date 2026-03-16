import React from "react";

const Sidebar = () => {

  const menu = [
    "Dashboard",
    "Accounts",
    "Transactions",
    "Transfer",
    "Loans",
    "Analytics",
    "AI Assistant",
    "Security",
    "Support"
  ];

  return (
    <div style={{
      width:"230px",
      background:"#0F172A",
      minHeight:"100vh",
      color:"white",
      padding:"25px"
    }}>

      <h3 style={{marginBottom:"30px"}}>Menu</h3>

      {menu.map((item,index)=>(
        <p key={index} style={{
          padding:"10px 0",
          cursor:"pointer",
          opacity:0.9
        }}>
          {item}
        </p>
      ))}

    </div>
  );
};

export default Sidebar;
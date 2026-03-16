import React from "react";

const Navbar = () => {
  return (
    <div style={{
      height:"60px",
      background:"#FFFFFF",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"0 30px",
      borderBottom:"1px solid #E5E7EB"
    }}>

      <h2 style={{color:"#2563EB"}}>FinGuard AI</h2>

      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        🔔
        👤
      </div>

    </div>
  );
};

export default Navbar;
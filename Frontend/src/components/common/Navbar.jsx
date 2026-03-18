import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={navStyle}>

      {/* LOGO */}
      <div style={leftSection}>
        <img src={logo} alt="FinGuard AI" style={logoStyle} />
        <h2 style={titleStyle}>FinGuard AI</h2>
      </div>

      {/* PROFILE ICON */}
      <div style={{ position: "relative" }}>

        <span
          style={profileStyle}
          onClick={() => setOpen(!open)}
        >
          👤
        </span>

        {/* DROPDOWN */}
        {open && (
          <div style={dropdownStyle}>
            <p onClick={() => navigate("/auth/user-login")}>User Login</p>
            <p onClick={() => navigate("/auth/admin-login")}>Admin Login</p>
            <p onClick={() => navigate("/auth/employee-login")}>Employee Login</p>
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;

/* ---------- STYLES ---------- */

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 24px",
  background: "#0F172A",
  color: "white",
};

const leftSection = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const logoStyle = {
  width: "40px",
  height: "40px",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "600",
};

const profileStyle = {
  fontSize: "20px",
  cursor: "pointer",
};

/* DROPDOWN */

const dropdownStyle = {
  position: "absolute",
  right: 0,
  top: "40px",
  background: "white",
  color: "black",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  padding: "10px",
  width: "180px",
};

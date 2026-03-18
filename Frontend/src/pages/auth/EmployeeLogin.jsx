import React, { useState } from "react";
import logo from "../../assets/logo.png";

const EmployeeLogin = () => {

  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const isValid = empId.length > 3 && password.length >= 6;

  return (
    <div style={container}>

      <div style={card}>

        <img src={logo} alt="logo" style={logoStyle} />

        <h2 style={title}>Employee Login</h2>

        <input
          type="text"
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button
          disabled={!isValid}
          style={{
            ...button,
            opacity: isValid ? 1 : 0.5
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default EmployeeLogin;

/* styles */
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0F172A, #1E293B)",
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  width: "320px",
  textAlign: "center",
};

const logoStyle = { width: "60px" };
const title = { margin: "10px 0" };

const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: "10px",
  background: "#0F172A",
  color: "white",
  border: "none",
  borderRadius: "8px",
};
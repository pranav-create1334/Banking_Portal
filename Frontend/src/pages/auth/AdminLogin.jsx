import React, { useState } from "react";
import logo from "../../assets/logo.png";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.includes("@") && password.length >= 6;

  return (
    <div style={container}>

      <div style={card}>

        <img src={logo} alt="logo" style={logoStyle} />

        <h2 style={title}>Admin Login</h2>

        <p style={warning}>Authorized Personnel Only</p>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default AdminLogin;

/* styles */
const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #1E1B4B, #020617)",
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

const warning = {
  color: "red",
  fontSize: "12px",
  marginBottom: "10px",
};

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
  background: "#020617",
  color: "white",
  border: "none",
  borderRadius: "8px",
};
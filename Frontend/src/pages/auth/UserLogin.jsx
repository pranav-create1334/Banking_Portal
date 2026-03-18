import React, { useState } from "react";
import logo from "../../assets/logo.png";

const UserLogin = () => {

  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");

  const isValid = mobile.length === 10 && mpin.length === 4;

  const handleLogin = () => {
    if (!isValid) return;

    console.log("Login Attempt:", { mobile, mpin });
    alert("Login Successful (UI only)");
  };

  return (
    <div style={container}>

      <div style={card}>

        {/* LOGO */}
        <img src={logo} alt="logo" style={logoStyle} />

        <h2 style={title}>User Login</h2>

        {/* MOBILE */}
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          maxLength={10}
          style={input}
        />

        {/* MPIN */}
        <input
          type="password"
          placeholder="Enter MPIN"
          value={mpin}
          onChange={(e) => setMpin(e.target.value.replace(/\D/g, ""))}
          maxLength={4}
          style={input}
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          disabled={!isValid}
          style={{
            ...button,
            opacity: isValid ? 1 : 0.5,
            cursor: isValid ? "pointer" : "not-allowed"
          }}
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default UserLogin;

/* ---------- STYLES ---------- */

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #0F172A, #1E293B)",
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  width: "320px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const logoStyle = {
  width: "60px",
  marginBottom: "10px",
};

const title = {
  marginBottom: "20px",
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
  marginTop: "15px",
  borderRadius: "8px",
  border: "none",
  background: "#0F172A",
  color: "white",
  fontWeight: "600",
};
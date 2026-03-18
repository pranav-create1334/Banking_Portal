import React, { useState } from "react";
import logo from "../../assets/logo.png";

const UserLogin = () => {

  const [mobile, setMobile] = useState("");
  const [mpin, setMpin] = useState("");

  const isValid = mobile.length === 10 && mpin.length === 4;

  const handleLogin = () => {
    if (!isValid) return;
    alert("Login Success (UI)");
  };

  return (
    <div className="center-container">

      <div className="card">

        <img src={logo} alt="logo" className="logo" />

        <h2>User Login</h2>

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          maxLength={10}
          className="input"
        />

        <input
          type="password"
          placeholder="MPIN"
          value={mpin}
          onChange={(e) => setMpin(e.target.value.replace(/\D/g, ""))}
          maxLength={4}
          className="input"
        />

        <button
          onClick={handleLogin}
          disabled={!isValid}
          className="button"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default UserLogin;
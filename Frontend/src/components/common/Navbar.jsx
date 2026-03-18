import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuItems } from "../../config/menu";

const Navbar = ({ toggleSidebar }) => {

  const [open, setOpen] = useState(false);         // profile dropdown
  const [menuOpen, setMenuOpen] = useState(false); // ☰ dropdown
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const dropdownRef = useRef();
  const menuRef = useRef();

  // ✅ Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 ☰ CLICK HANDLER
  const handleMenuClick = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    } else {
      toggleSidebar(); // desktop behavior
    }
  };

  // 🔥 COMBINED MENU
  const combinedMenu = ["Home", ...menuItems];

  // 🔥 ROUTE MAP
  const pathMap = {
    Home: "/",
    Dashboard: "/",
    Accounts: "/accounts",
    Transactions: "/transactions",
    Transfer: "/transfer",
    Loans: "/loans",
    Analytics: "/analytics",
    "AI Assistant": "/ai",
    Security: "/security",
    Support: "/support"
  };

  return (
    <nav style={navStyle}>

      {/* LEFT */}
      <div style={leftSection} ref={menuRef}>

        <span style={menuIcon} onClick={handleMenuClick}>
          ☰
        </span>

        <img src={logo} alt="FinGuard AI" style={logoStyle} />
        <h2 style={titleStyle}>FinGuard AI</h2>

        {/* MOBILE MENU */}
        {menuOpen && isMobile && (
          <div style={menuDropdown}>
            {combinedMenu.map((item, index) => (
              <p
                key={index}
                style={itemStyle}
                onClick={() => {
                  setMenuOpen(false);
                  navigate(pathMap[item] || "/");
                }}
              >
                {item}
              </p>
            ))}
          </div>
        )}

      </div>

      {/* RIGHT PROFILE */}
      <div style={{ position: "relative" }} ref={dropdownRef}>

        <span
          style={profileStyle}
          onClick={() => setOpen(!open)}
        >
          👤
        </span>

        {open && (
          <div style={dropdownStyle}>
            <p style={itemStyle} onClick={() => navigate("/auth/user-login")}>
              User Login
            </p>
            <p style={itemStyle} onClick={() => navigate("/auth/admin-login")}>
              Admin Login
            </p>
            <p style={itemStyle} onClick={() => navigate("/auth/employee-login")}>
              Employee Login
            </p>
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
  padding: "12px 20px",
  background: "#020617",
  color: "white",
  height: "60px",
};

const leftSection = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  position: "relative",
};

const menuIcon = {
  fontSize: "22px",
  cursor: "pointer",
  marginRight: "10px",
};

const logoStyle = {
  width: "36px",
  height: "36px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "600",
};

const profileStyle = {
  fontSize: "22px",
  cursor: "pointer",
};

/* PROFILE DROPDOWN */

const dropdownStyle = {
  position: "absolute",
  right: 0,
  top: "45px",
  background: "white",
  color: "black",
  borderRadius: "8px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  padding: "10px 0",
  width: "180px",
  zIndex: 1000,
};

const itemStyle = {
  padding: "10px 15px",
  cursor: "pointer",
};

/* MOBILE MENU */

const menuDropdown = {
  position: "absolute",
  top: "55px",
  left: "0",
  background: "white",
  color: "black",
  borderRadius: "8px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  width: "220px",
  padding: "10px 0",
  zIndex: 1000,
};
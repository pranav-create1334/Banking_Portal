import React from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

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
    <>
      {/* 🔥 OVERLAY (MOBILE ONLY) */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div style={overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* 🔥 SIDEBAR */}
      <div
        style={{
          ...sidebarStyle,
          transform:
            window.innerWidth <= 768
              ? sidebarOpen
                ? "translateX(0)"
                : "translateX(-100%)"
              : "translateX(0)",
        }}
      >

        <h3 style={{ marginBottom: "30px" }}>Menu</h3>

        {menu.map((item, index) => (
          <p
            key={index}
            style={itemStyle}
            onClick={() => {
              if (window.innerWidth <= 768) {
                setSidebarOpen(false);
              }
            }}
          >
            {item}
          </p>
        ))}

      </div>
    </>
  );
};

export default Sidebar;

/* ---------- STYLES ---------- */

const sidebarStyle = {
  width: "230px",
  background: "#0F172A",
  minHeight: "100vh",
  color: "white",
  padding: "25px",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  transition: "0.3s ease",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  zIndex: 999,
};

const itemStyle = {
  padding: "10px 0",
  cursor: "pointer",
  opacity: 0.9,
};
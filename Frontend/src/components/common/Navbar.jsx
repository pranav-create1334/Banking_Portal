import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menuItems } from "../../config/menu";

const Navbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const dropdownRef = useRef();
  const menuRef = useRef();

  /* ✅ Responsive */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ✅ Close outside */
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

  const handleMenuClick = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    } else {
      toggleSidebar();
    }
  };

  const combinedMenu = ["Home", ...menuItems];

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
    Support: "/support",
  };

  return (
    <nav className="flex items-center justify-between px-5 h-14 bg-slate-950 text-white shadow-md">

      {/* LEFT */}
      <div className="flex items-center gap-3 relative" ref={menuRef}>

        <button
          onClick={handleMenuClick}
          className="text-xl cursor-pointer"
        >
          ☰
        </button>

        <img src={logo} alt="FinGuard AI" className="w-9 h-9" />
        <h2 className="text-lg font-semibold">FinGuard AI</h2>

        {/* MOBILE MENU */}
        {menuOpen && isMobile && (
          <div className="absolute top-14 left-0 bg-white text-black rounded-lg shadow-lg w-56 py-2 z-50">
            {combinedMenu.map((item, index) => (
              <p
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
      <div className="relative" ref={dropdownRef}>

        <button
          onClick={() => setOpen(!open)}
          className="text-xl cursor-pointer"
        >
          👤
        </button>

        {open && (
          <div className="absolute right-0 top-12 bg-white text-black rounded-lg shadow-lg w-44 py-2 z-50">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
               onClick={() => navigate("/auth/user-login")}>
              User Login
            </p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
               onClick={() => navigate("/auth/admin-login")}>
              Admin Login
            </p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
               onClick={() => navigate("/auth/employee-login")}>
              Employee Login
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
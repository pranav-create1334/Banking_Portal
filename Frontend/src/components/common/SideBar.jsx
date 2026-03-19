import React, { useEffect, useState } from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    "Dashboard",
    "Accounts",
    "Transactions",
    "Transfer",
    "Loans",
    "Analytics",
    "AI Assistant",
    "Security",
    "Support",
  ];

  return (
    <>
      {/* 🔥 OVERLAY (MOBILE ONLY) */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
             onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR */}
      <div
        className={`
          bg-slate-900 text-white p-5 z-50
          transition-transform duration-300

          ${isMobile
            ? `fixed top-0 left-0 h-full w-64 transform ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : `relative w-64 h-full`
          }
        `}
      >
        <h3 className="mb-8 text-lg font-semibold">Menu</h3>

        <div className="space-y-3">
          {menu.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer opacity-90 hover:opacity-100 hover:translate-x-1 transition-all"
              onClick={() => {
                if (isMobile) setSidebarOpen(false);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import AppRoutes from "./routes/AppRoutes";

import UserLogin from "./pages/auth/UserLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import EmployeeLogin from "./pages/auth/EmployeeLogin";

import "./styles/global.css";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>

      <Navbar toggleSidebar={toggleSidebar} />

      <Routes>

        {/* AUTH */}
        <Route path="/auth/user-login" element={<UserLogin />} />
        <Route path="/auth/admin-login" element={<AdminLogin />} />
        <Route path="/auth/employee-login" element={<EmployeeLogin />} />

        {/* MAIN */}
        <Route
          path="/*"
          element={
            <div className="app-container">

              {/* ✅ CONDITIONAL SIDEBAR */}
              {sidebarOpen && <Sidebar />}

              <div className="main-content">
                <AppRoutes />
              </div>

            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
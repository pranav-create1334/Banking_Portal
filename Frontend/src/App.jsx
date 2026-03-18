import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

import AppRoutes from "./routes/AppRoutes";

import UserLogin from "./pages/auth/UserLogin";
import AdminLogin from "./pages/auth/AdminLogin";
import EmployeeLogin from "./pages/auth/EmployeeLogin";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* ✅ AUTH PAGES (NO SIDEBAR) */}
        <Route path="/auth/user-login" element={<UserLogin />} />
        <Route path="/auth/admin-login" element={<AdminLogin />} />
        <Route path="/auth/employee-login" element={<EmployeeLogin />} />

        {/* ✅ MAIN APP */}
        <Route
          path="/*"
          element={
            <div className="app-container">
              <Sidebar />
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
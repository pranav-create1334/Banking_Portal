import React from "react";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";

function App() {

  return (
    <div>

      <Navbar/>

      <div className="app-container">

        <Sidebar/>

        <div className="main-content">

          <AppRoutes/>

        </div>

      </div>

    </div>
  );
}

export default App;
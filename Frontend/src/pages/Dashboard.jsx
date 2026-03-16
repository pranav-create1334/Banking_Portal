import React from "react";
import BalanceCard from "../components/dashboard/BalanceCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";

const Dashboard = () => {

  return (
    <div>

      <BalanceCard/>

      <RecentTransactions/>

    </div>
  );
};

export default Dashboard;
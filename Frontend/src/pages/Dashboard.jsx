import React from "react";
import BalanceCard from "../components/dashboard/BalanceCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import AccountCard from "../components/dashboard/AccountCard";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import SpendingChart from "../components/dashboard/SpendingChart";

const Dashboard = () => {

  return (
    <div className="dashboard-container">

      {/* Accounts Row */}
      <div className="accounts-row">
        <AccountCard
          type="Savings Account"
          balance="₹80,000"
          number="**** 1234"
        />

        <AccountCard
          type="Current Account"
          balance="₹44,500"
          number="**** 5678"
        />
      </div>

      {/* Balance */}
      <div className="balance-section">
        <BalanceCard />
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <SpendingChart />
        <QuickTransfer />
      </div>

      {/* Transactions */}
      <div className="transactions-section">
        <RecentTransactions />
      </div>

    </div>
  );
};

export default Dashboard;
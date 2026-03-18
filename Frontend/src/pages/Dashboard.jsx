import React from "react";
import BalanceCard from "../components/dashboard/BalanceCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import AccountCard from "../components/dashboard/AccountCard";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import SpendingChart from "../components/dashboard/SpendingChart";

const Dashboard = () => {

  return (
    <div>

      {/* Accounts Row */}
      <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
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
      <div style={{marginTop:"20px"}}>
        <BalanceCard />
      </div>

      {/* Middle Section */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"2fr 1fr",
        gap:"20px",
        marginTop:"20px"
      }}>

        <SpendingChart />
        <QuickTransfer />

      </div>

      {/* Transactions */}
      <div style={{marginTop:"20px"}}>
        <RecentTransactions />
      </div>

    </div>
  );
};

export default Dashboard;
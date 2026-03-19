import Layout from "../components/common/Layout";
import BalanceCard from "../components/dashboard/BalanceCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import QuickTransfer from "../components/dashboard/QuickTransfer";
import SpendingChart from "../components/dashboard/SpendingChart";

const Dashboard = () => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">

        {/* Top spacing */}
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Force equal height behavior */}
          <div className="h-full">
            <BalanceCard />
          </div>

          <div className="h-full">
            <QuickTransfer />
          </div>

          <div className="h-full">
            <SpendingChart />
          </div>

          {/* Full width section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <RecentTransactions />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
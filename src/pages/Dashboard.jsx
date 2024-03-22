import Topbar from "../components/Navbars/TopBar";
import SideBar from "../components/Navbars/SideBar";
import { Routes, Route } from "react-router-dom";
import Tables from "../containers/DashboardSections/Tables";

const Dashboard = () => {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Tables />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;

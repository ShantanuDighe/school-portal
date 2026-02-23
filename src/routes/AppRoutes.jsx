import { Routes, Route } from "react-router-dom";
import ParentDashboard from "../features/dashboard/ParentDashboard";
//import StudentDashboard from "../features/dashboard/StudentDashboard";
import PortalLayout from "../components/layout/PortalLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ParentDashboard />} />

      <Route path="/parent" element={<PortalLayout role="parent" />}>
        <Route index element={<ParentDashboard />} />
      </Route>

      <Route path="/student" element={<PortalLayout role="student" />}>
        <Route index element={<StudentDashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

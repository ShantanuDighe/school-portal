import { Routes, Route } from "react-router-dom";
import ParentDashboard from "../features/dashboard/ParentDashboard";
import StudentDashboard from "../features/dashboard/StudentDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ParentDashboard />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
    </Routes>
  );
}

export default AppRoutes;

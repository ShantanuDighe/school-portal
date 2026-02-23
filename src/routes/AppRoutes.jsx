import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import OTPVerify from "../features/auth/OTPVerify";
import ParentDashboard from "../features/dashboard/ParentDashboard";
import StudentDashboard from "../features/dashboard/StudentDashboard";
import Messages from "../features/messaging/Messages";
import LeaveForm from "../features/leave/LeaveForm";
import DocumentUpload from "../features/documents/DocumentUpload";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify" element={<OTPVerify />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/leave" element={<LeaveForm />} />
      <Route path="/documents" element={<DocumentUpload />} />
    </Routes>
  );
}

export default AppRoutes;

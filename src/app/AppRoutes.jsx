import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../features/auth/Login";
import ParentDashboard from "../features/dashboard/ParentDashboard";
import Messages from "../features/messaging/Messages";
import LeaveForm from "../features/leave/LeaveForm";
import DocumentUpload from "../features/documents/DocumentUpload";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/parent"
        element={
          <ProtectedRoute>
            <Layout>
              <ParentDashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <Layout>
              <Messages />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/leave"
        element={
          <ProtectedRoute>
            <Layout>
              <LeaveForm />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Layout>
              <DocumentUpload />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

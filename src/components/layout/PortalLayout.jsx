import { Outlet } from "react-router-dom";

function PortalLayout({ role }) {
  return (
    <div>
      <h2>{role} Portal</h2>
      <Outlet />
    </div>
  );
}

export default PortalLayout;

import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

function PortalLayout({ role }) {
  return (
    <div className="d-flex">
      <Sidebar role={role} />
      <div className="flex-grow-1">
        <Topbar role={role} />
        <div className="container-fluid p-4 bg-light min-vh-100">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PortalLayout

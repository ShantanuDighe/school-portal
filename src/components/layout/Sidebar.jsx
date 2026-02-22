import { Link } from "react-router-dom"

function Sidebar({ role }) {
  return (
    <div className="bg-primary text-white p-3 vh-100" style={{width: "250px"}}>
      <h5>School Portal</h5>
      <ul className="nav flex-column mt-4">

        <li className="nav-item">
          <Link className="nav-link text-white" to={`/${role}`}>
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to={`/${role}/attendance`}>
            Attendance
          </Link>
        </li>

        {role === "parent" && (
          <li className="nav-item">
            <Link className="nav-link text-white" to="/parent/fees">
              Fees
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link className="nav-link text-white" to={`/${role}/assignments`}>
            Assignments
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to={`/${role}/leave`}>
            Leave
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar

import { Home, MessageSquare, FileText, Upload } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">SchoolPortal</h2>

      <Link to="/parent"><Home size={18}/> Dashboard</Link>
      <Link to="/messages"><MessageSquare size={18}/> Messages</Link>
      <Link to="/leave"><FileText size={18}/> Leave</Link>
      <Link to="/documents"><Upload size={18}/> Documents</Link>
    </div>
  );
}

export default Sidebar;

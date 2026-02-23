import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;

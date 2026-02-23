import { Moon } from "lucide-react";
import ChildSwitcher from "./ChildSwitcher";
import { useTheme } from "../context/ThemeContext";

function Topbar() {
  const { toggleTheme } = useTheme();

  return (
    <div className="topbar">
      <ChildSwitcher />
      <button onClick={toggleTheme}>
        <Moon size={18} />
      </button>
    </div>
  );
}

export default Topbar;

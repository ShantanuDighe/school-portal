import { useState } from "react";

function ChildSwitcher() {
  const [selected, setSelected] = useState("Rahul");

  const children = ["Rahul", "Anaya", "Kabir"];

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="child-switcher"
    >
      {children.map((child) => (
        <option key={child}>{child}</option>
      ))}
    </select>
  );
}

export default ChildSwitcher;

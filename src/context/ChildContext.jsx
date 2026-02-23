import { createContext, useContext, useState } from "react";

const ChildContext = createContext();

export function ChildProvider({ children }) {
  const [activeChild, setActiveChild] = useState(null);

  return (
    <ChildContext.Provider value={{ activeChild, setActiveChild }}>
      {children}
    </ChildContext.Provider>
  );
}

export const useChild = () => useContext(ChildContext);

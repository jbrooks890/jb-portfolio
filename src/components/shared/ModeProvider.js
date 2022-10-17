import { useContext, createContext, useState } from "react";

const SiteMode = createContext();
export const useSiteMode = () => useContext(SiteMode);

export function ModeProvider({ children }) {
  const [siteMode, setSiteMode] = useState("Developer");

  function updateMode(mode) {
    setSiteMode(mode[0].toUpperCase(1) + mode.slice(1));
  }

  return (
    <SiteMode.Provider value={[siteMode, updateMode]}>
      {children}
    </SiteMode.Provider>
  );
}

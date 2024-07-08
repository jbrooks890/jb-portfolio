import { useContext, createContext, useState } from "react";
import { capitalize } from "../../lib/utility/helperFns";
import { useParams } from "react-router-dom";

const SiteMode = createContext();
export const useSiteMode = () => useContext(SiteMode);

export function ModeProvider({ children }) {
  const [siteMode, setSiteMode] = useState("Developer");

  const updateMode = (mode) => setSiteMode(capitalize(mode));

  return (
    <SiteMode.Provider value={[siteMode, updateMode]}>
      {children}
    </SiteMode.Provider>
  );
}

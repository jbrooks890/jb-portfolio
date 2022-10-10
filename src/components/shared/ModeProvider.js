import { useContext, createContext, useState } from "react";
import { useParams } from "react-router-dom";

const SiteMode = createContext();

export const useSiteMode = () => useContext(SiteMode);

export function ModeProvider({ children }) {
  const { mode } = useParams();
  const [siteMode, setSiteMode] = useState(
    mode ? mode[0].toUpperCase(1) + mode.slice(1) : "Developer"
  );
  const pages = ["Developer", "Artist", "Writer", "Game"];

  return (
    <SiteMode.Provider value={[siteMode, setSiteMode]}>
      {children}
    </SiteMode.Provider>
  );
}

import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const logIn = () => {
    setPage(2);
  };
  const signOut = () => {
    setPage(1);
  };
  return (
    <PageContext.Provider value={{ page, setPage, logIn }}>
      {children}
    </PageContext.Provider>
  );
};

import React, { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={"Souren"}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

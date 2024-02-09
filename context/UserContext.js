'use client';
import React, { createContext, useContext, useState } from "react";

// Create a new context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("tenant"); // Default user type

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the user context
export const useUser = () => useContext(UserContext);
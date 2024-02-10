'use client';
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a new context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("tenant");

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType"); // Retrieve userType from localStorage
    if (storedUserType) {
      setUserType(storedUserType) || "tenant";
    }
  } , []);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume the user context
export const useUser = () => useContext(UserContext);
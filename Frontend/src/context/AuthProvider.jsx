import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(() => {
    const user = localStorage.getItem("Users");
    try {
      return user ? JSON.parse(user) : undefined;
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return undefined; // Fallback to undefined on error
    }
  });

  // Effect to synchronize state with localStorage
  useEffect(() => {
    const user = localStorage.getItem("Users");
    setAuthUser(user ? JSON.parse(user) : undefined);
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Exporting the AuthProvider
export default AuthProvider;

// Exporting the useAuth hook for accessing context
export const useAuth = () => useContext(AuthContext);

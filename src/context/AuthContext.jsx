import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [selectedProfile, setSelectedProfile] = useState(
    JSON.parse(localStorage.getItem("selectedProfile") || "null"),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get("/api/auth/profile");
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch profile", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await axios.post("/api/auth/login", { email, password });
    const { token, ...userData } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
  };

  const signup = async (name, email, password, role = "user") => {
    const response = await axios.post("/api/auth/signup", {
      name,
      email,
      password,
      role,
    });
    const { token, ...userData } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("selectedProfile");
    setToken(null);
    setUser(null);
    setSelectedProfile(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", JSON.stringify(profile));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        selectedProfile,
        loading,
        login,
        signup,
        logout,
        selectProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

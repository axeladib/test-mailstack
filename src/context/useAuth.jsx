import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Make sure to import the AuthContext from your AuthProvider file

//TODO: useAuth is when the we read the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

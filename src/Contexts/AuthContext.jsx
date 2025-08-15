// React
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
// Use Context
const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState("");
  const [userType, setuserType] = useState({});

  const log = (check) => setAuth(check);
  useEffect(() => {
    let loggedUser;
    try {
      loggedUser = JSON.parse(localStorage.getItem("loggedUser")).userType;
    } catch (err) {
      //  loggedUser="not found"
    }
    if (loggedUser) {
      setAuth(true);
      setuserType(loggedUser);
    } else {
      setAuth(false);
    }
  }, []);
  console.log(userType)

  return (
    <AuthContext value={{ isAuth, userType, log }}>{children}</AuthContext>
  );
};

export default AuthProvider;

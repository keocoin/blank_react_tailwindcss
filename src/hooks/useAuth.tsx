import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export type AuthContextType = {
  user: any;
  login: any;
  logout: any;
  signinWithIdToken?: any;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useLocalStorage("user", {});
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    // if (data.profile.status == "new") {
    //   navigate("/user/setup-account");
    // } else {
    navigate("/");
    // }
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser({});
    navigate("/auth", { replace: true });
  };

  const value: AuthContextType = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

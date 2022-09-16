import React from "react";
import { authReducer, initialState } from "../reducers/auth";
import { getLocalStorageValue } from "../utils";
import { TOKEN_KEY, setToken, isTokenValid } from "../api/APIUtils";
import { logout } from "../api/AuthAPI";

const AuthContext = React.createContext({
  state: initialState,
  dispatch: () => initialState,
});

export function AuthProvider(props) {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  React.useEffect(() => {
    const token = getLocalStorageValue(TOKEN_KEY);

    if (!token) return;

    if (isTokenValid(token)) {
      setToken(token);
      dispatch({ type: "LOGIN" });
    } else {
      dispatch({ type: "LOGOUT" });
      logout();
    }
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useAuth() {
  return React.useContext(AuthContext);
}

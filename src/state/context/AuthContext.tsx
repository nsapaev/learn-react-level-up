import { useReducer, useMemo, createContext, use, useCallback } from "react";
import type { AuthContextValue } from "../../types/auth";
import {
  authReducer,
  initialAuthState,
} from "../../state/reducers/authReducer";

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = useCallback(async () => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const request = await new Promise<{ ok: boolean }>((res, rej) => {
        setTimeout(() => {
          res({ ok: true });
        }, 500);
      });

      if (!request.ok) {
        throw new Error("login failure");
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          id: 1,
          name: "Nuriddin Sapaev",
        },
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "some error",
      });
    }
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const value = useMemo(
    () => ({ state, login, logout }),
    [state, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

interface AuthUser {
  id: number;
  name: string;
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "LOGIN_REQUEST" }
  | { type: "LOGIN_SUCCESS"; payload: AuthUser }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "LOGOUT" };

export type AuthContextValue = {
  state: AuthState;
  login: () => void;
  logout: () => void;
};

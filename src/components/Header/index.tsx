import { useAuth } from "../../hooks/useAuth";

export function Header() {
  const { state, login, logout } = useAuth();
  if (Math.random() > 0.5) {
    throw new Error("Random crash");
  }
  return (
    <div>
      {state.user?.name ? (
        <div>
          {state.user?.name} <button onClick={logout}>logout</button>
        </div>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
}

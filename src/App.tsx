import { User } from "./components/User";
import { Header } from "./components/Header";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <User />
    </div>
  );
}

export default App;

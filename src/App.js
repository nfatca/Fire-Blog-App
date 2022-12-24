import AppRouter from "./app-router/AppRouter";
import "./App.css";

import { AuthContextProvider } from "./contexts/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;

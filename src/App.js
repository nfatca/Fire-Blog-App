import AppRouter from "./app-router/AppRouter";
import "./App.css";

import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { BlogContextProvider } from "./contexts/BlogContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

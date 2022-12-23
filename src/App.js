import AppRouter from "./app-router/AppRouter";
import "./App.css";
import Navbar from "./components/Navbar";
import AuthContectProvider from "./contexts/AuthContectProvider";

function App() {
  return (
    <div className="App">
      <AuthContectProvider>
        <AppRouter />
      </AuthContectProvider>
    </div>
  );
}

export default App;

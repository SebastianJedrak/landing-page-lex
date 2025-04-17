import { Routes, Route } from "react-router";
import Login from "./components/pages/Login";
import Pricing from "./components/pages/Pricing";
import { AuthProvider } from "./components/store/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

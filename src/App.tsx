import { Routes, Route } from "react-router";
import Login from "./components/pages/Login";
import Pricing from "./components/pages/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;

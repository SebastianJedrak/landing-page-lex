import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/pricing" element={<div>Pricing</div>} />
    </Routes>
  );
}

export default App;

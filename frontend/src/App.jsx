import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import MainDashboard from "./components/MainDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route  exact path="/" element={<Login />}></Route>
        <Route  exact path="/register" element={<Register />}></Route>
        <Route  exact path="/dashboard" element={<MainDashboard />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

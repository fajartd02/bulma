import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route  exact path="/" element={<Login />}></Route>
        <Route  exact path="/register" element={<Register />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

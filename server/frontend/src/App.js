import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"

function App() {
  return (
    <Routes>
     

      {/* Route for Login */}
      <Route path="/login" element={<LoginPanel />} />

      {/* Route for Registration */}
      <Route path="/register" element={<RegisterPanel />} />

      {/* Route for Dealers */}
      <Route path="/dealers" element={<Dealers/>} />

      {/* Route for Dealer REACT */}
      <Route path="/dealer/:id" element={<Dealer/>} />    <Route path="/dealer/:id" element={<Dealer/>} />

    </Routes>
  );
}

export default App;

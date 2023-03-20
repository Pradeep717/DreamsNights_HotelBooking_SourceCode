import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Adminscreen from "./screens/Adminscreen";
import Landingscreen from "./screens/Landingscreen";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/home" element={<Homescreen />} />
            <Route path="book/:id" element={<Bookingscreen />} />
            <Route path="register" element={<Registerscreen />} />
            <Route path="login" element={<Loginscreen />} />
            <Route path="admin" element={<Adminscreen />} />
            <Route path="/" element={<Landingscreen />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;

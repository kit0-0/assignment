import LoginPage from "./pages/Login";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import OTPPage from "./pages/OTPPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-otp" element={<OTPPage />} />
      </Routes>
    </Router>
  );
}

export default App;

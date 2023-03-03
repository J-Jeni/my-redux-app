import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

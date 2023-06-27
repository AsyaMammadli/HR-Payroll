import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";
import ProtectedLayout from "./components/ProtectedLayout";
import NonProtectedLayout from "./components/NonProtectedLayout";
import Salaries from "./pages/Salaries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="salaries" element={<Salaries />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<NonProtectedLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";
import PrivateLayout from "./components/PrivateLayout";
import PublicLayout from "./components/PublicLayout";
import Salaries from "./pages/Salaries";
import Training from "./pages/Training";
import Evaluation from "./pages/Evaluation";
import RecruitmentAndSelection from "./pages/RecruitmentAndSelection";
import LeavePermission from "./pages/LeavePermission";
import EmployeeComplaints from "./pages/EmployeeComplaints";
import EmployeePerformance from "./pages/EmployeePerformance";
import HealthAndSafety from "./pages/HealthAndSafety";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

function App() {
  Chart.register(CategoryScale);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="employees" element={<Employees />} />
            <Route path="salaries" element={<Salaries />} />
            <Route path="training" element={<Training />} />
            <Route path="evaluation" element={<Evaluation />} />
            <Route
              path="recruitment-and-selection"
              element={<RecruitmentAndSelection />}
            />
            <Route path="leave-permission" element={<LeavePermission />} />
            <Route
              path="employee-complaints"
              element={<EmployeeComplaints />}
            />
            <Route
              path="employee-performance"
              element={<EmployeePerformance />}
            />
            <Route path="health-and-safety" element={<HealthAndSafety />} />

            <Route path="*" element={<NotFound />} />
          </Route>

          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

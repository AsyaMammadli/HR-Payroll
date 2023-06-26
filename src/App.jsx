import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Posts from "./pages/Posts";
import ProtectedLayout from "./components/ProtectedLayout";
import NonProtectedLayout from "./components/NonProtectedLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />

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

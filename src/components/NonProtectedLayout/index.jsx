import { Outlet } from "react-router";
import "./index.css";

const NonProtectedLayout = () => {
  return (
    <main>
      <div className="blueCircle">
        <div className="greenCircle"></div>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default NonProtectedLayout;

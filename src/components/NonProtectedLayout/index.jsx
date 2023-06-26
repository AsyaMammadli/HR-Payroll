import { Outlet } from "react-router";
import "./index.css";

const NonProtectedLayout = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 relative">
          <div className="blueCircle">
            <div className="greenCircle"></div>
          </div>
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default NonProtectedLayout;

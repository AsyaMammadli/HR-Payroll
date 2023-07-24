import { Outlet } from "react-router";
import "./index.css";

const PublicLayout = () => {
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

export default PublicLayout;

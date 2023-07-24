import { Outlet } from "react-router";
import "./index.css";

const PublicLayout = () => {
  return (
    <main>
      <div className="blueCircle">
        <div className="greenCircle"></div>
      </div>
      <Outlet />
    </main>
  );
};

export default PublicLayout;

import { Outlet } from "react-router";
import Star from "../../assets/Star2.svg";
import Search from "../../assets/search-normal.svg";

import "./index.css";
const ProtectedLayout = () => {
  return (
    <>
      <aside>
        <div className="logo">
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <span className="font-bold">TalentCore</span>
        </div>
      </aside>

      <main>
        <header>
          <div className="flex">
            <img src={Search} alt="Search" className="-me-5" />
            <input
              className="searchInput ps-3"
              type="text"
              placeholder="Search for jobs, candidates and more..."
            />
          </div>
        </header>

        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProtectedLayout;

import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Star from "../../assets/Star2.svg";
import Search from "../../assets/search-normal.svg";
import SettingsImg from "../../assets/settingpic.svg";
import NotificationImg from "../../assets/notification.svg";
import ProfileImg from "../../assets/profilepic.png";
// import SidebarLink from "../../SidebarLink";
import "./index.css";
const ProtectedLayout = () => {
  return (
    <>
      <aside>
        <div className="logo">
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <span className="font-bold pl-2">TalentCore</span>
        </div>
        <div className="sidebarLinks">
          <div className="sidebarlink active">
            <i className="fa-solid fa-gauge-high"></i>
            <Link to="/">Dashboard</Link>
          </div>
          <div className="sidebarlink">
            <i className="fa-solid fa-envelope-open-text"></i>
            <Link to="/employees">Employees</Link>
          </div>
          <div className="sidebarlink">
            <i className="fa-solid fa-calendar-days"></i>
            <Link to="/salaries">Salaries</Link>
          </div>
        </div>
      </aside>

      <main>
        <header>
          <div className="inline-block relative">
            <img src={Search} alt="Search" className="searchIcon" />
            <input
              className="searchInput"
              type="text"
              placeholder="Search for jobs, candidates and more..."
            />
          </div>

          <ul className="headerLinks">
            <li>
              <img src={SettingsImg} alt="Settings" />
            </li>
            <li>
              <img src={NotificationImg} alt="Notifications" />
            </li>
            <li>
              <img src={ProfileImg} alt="Profile" />
            </li>
          </ul>
        </header>

        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProtectedLayout;

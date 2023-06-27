import { Outlet } from "react-router";
import Star from "../../assets/Star2.svg";
import Search from "../../assets/search-normal.svg";
import SettingsImg from "../../assets/settingpic.svg";
import NotificationImg from "../../assets/notification.svg";
import ProfileImg from "../../assets/profilepic.png";

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

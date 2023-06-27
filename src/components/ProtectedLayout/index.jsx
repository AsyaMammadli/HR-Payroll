import { Outlet } from "react-router";
import Star from "../../assets/Star2.svg";
import Search from "../../assets/search-normal.svg";
import SettingsImg from "../../assets/settingpic.svg";
import NotificationImg from "../../assets/notification.svg";
import ProfileImg from "../../assets/profilepic.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
  const navigate = useNavigate();

  function logout() {
    navigate("/login");
  }
  const sidebarLinks = [
    {
      path: "/",
      text: "Dashboard",
      icon: "fa-solid fa-gauge-high",
    },
    {
      path: "/employees",
      text: "Employees",
      icon: "fa-solid fa-envelope-open-text",
    },
    {
      path: "/salaries",
      text: "Salaries",
      icon: "fa-solid fa-calendar-days",
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const location = useLocation();
  const path = location.pathname;
  const activeLinkIndex = sidebarLinks.findIndex((link) => link.path === path);

  return (
    <>
      <aside>
        <div className="logo">
          <img src={Star} alt="Star" />
          <img src={Star} alt="Star" />
          <span className="font-bold pl-2">TalentCore</span>
        </div>
        <div className="sidebarLinks">
          {sidebarLinks.map((link, index) => (
            <div
              key={index}
              className={`sidebarlink ${
                index === activeLinkIndex ? "active" : ""
              }`}
              onClick={() => setActiveLink(index)}
            >
              <i className={`fa-solid ${link.icon}`}></i>
              <Link to={link.path}>{link.text}</Link>
            </div>
          ))}
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
              <img
                src={ProfileImg}
                alt="Profile"
                onClick={logout}
                className="cursor-pointer"
              />
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

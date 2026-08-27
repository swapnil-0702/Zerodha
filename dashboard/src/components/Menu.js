import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchLoggedInUser,
  getAvatarLetter,
  getDisplayName,
  getStoredUser,
  getUsername,
} from "../utils/auth";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const loggedInUser = await fetchLoggedInUser();
        setUser(loggedInUser);
        return;
      } catch (error) {
        console.log("Unable to fetch logged-in user");
      }

      setUser(getStoredUser());
    };

    loadUser();
  }, []);

  const firstLetter = getAvatarLetter(user);
  const displayName = getDisplayName(user);
  const username = getUsername(user);

  const toggleProfile = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "https://zerodha-frontend-gyzx.onrender.com/login";
  };

  return (
    <div className="menu-container">
      <div className="logo">
        <Link to="/" aria-label="Zerodha dashboard">
          <img src="/media/images/images.png" style={{ width: "40px" }} />
        </Link>
      </div>

      <div className="menus">
        <ul>
          <li
            onClick={() => setSelectedMenu(0)}
            className={selectedMenu === 0 ? "active" : ""}
          >
            <Link to="/">
              <p>Dashboard</p>
            </Link>
          </li>
          <li
            onClick={() => setSelectedMenu(1)}
            className={selectedMenu === 1 ? "active" : ""}
          >
            <Link to="/orders">
              <p>Orders</p>
            </Link>
          </li>
          <li
            onClick={() => setSelectedMenu(2)}
            className={selectedMenu === 2 ? "active" : ""}
          >
            <Link to="/holdings">
              <p>Holdings</p>
            </Link>
          </li>
          <li
            onClick={() => setSelectedMenu(3)}
            className={selectedMenu === 3 ? "active" : ""}
          >
            <Link to="/positions">
              <p>Positions</p>
            </Link>
          </li>
          <li
            onClick={() => setSelectedMenu(4)}
            className={selectedMenu === 4 ? "active" : ""}
          >
            <Link to="/funds">
              <p>Funds</p>
            </Link>
          </li>
          <li
            onClick={() => setSelectedMenu(5)}
            className={selectedMenu === 5 ? "active" : ""}
          >
            <Link to="/apps">
              <p>Apps</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className="profile">
        <div className="avatar" onClick={toggleProfile}>
          {firstLetter}
        </div>

        <span onClick={toggleProfile}>{username}</span>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="profile-header">
              <div className="profile-avatar">{firstLetter}</div>
              <div>
                <h3>{displayName}</h3>
                <p>{username}</p>
              </div>
            </div>

            <hr />

            <p className="dropdown-item">My Profile</p>
            <p className="dropdown-item">Settings</p>
            <p className="dropdown-item" onClick={handleLogout}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

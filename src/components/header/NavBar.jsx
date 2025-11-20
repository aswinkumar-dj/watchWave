import SearchBar from "./SearchBar";
import { HAMBURGER_ICON_URL, PROFILE_URL } from "../../utils/constants";

import useToggleSideBar from "../../utils/toggleSideBar";

const NavBar = () => {
  const handleToggle = useToggleSideBar((state) => state.toggleSideBar);

  return (
    <div className="navbar bg-base-200/30 shadow-lg fixed z-50 backdrop-blur-2xl">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={handleToggle}>
          <svg
            xmlns={HAMBURGER_ICON_URL}
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          🍃 WatchWave
        </a>
      </div>
      <div className="flex-2">
        <SearchBar />
      </div>
      <div className="flex-none pr-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={PROFILE_URL} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

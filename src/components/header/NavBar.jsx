import SearchBar from "./SearchBar";
import { HAMBURGER_ICON_URL, PROFILE_URL } from "../../utils/constants";
import useToggleSideBar from "../../utils/toggleSideBar";

const NavBar = () => {
  const handleToggle = useToggleSideBar((state) => state.toggleSideBar);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-base-200/70 shadow-lg backdrop-blur-2xl">
      <div className="navbar mx-auto min-h-16 max-w-[1600px] gap-2 px-2 sm:px-4">
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

        <a className="btn btn-ghost px-2 text-lg sm:text-xl" href="/">
          WatchWave
        </a>

        <div className="mx-1 min-w-0 flex-1 sm:mx-4">
          <SearchBar />
        </div>

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
    </header>
  );
};

export default NavBar;

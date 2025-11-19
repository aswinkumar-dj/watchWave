import useToggleSideBar from "../../utils/toggleSideBar";

const SideBar = () => {
  const isSideBarOpen = useToggleSideBar((state) => state.isSideBarOpen);
  if (!isSideBarOpen) return null;

  const content = ["Home", "Shorts", "Subscriptions", "YouTube Music"];
  const explore = [
    "Trending",
    "Shopping",
    "Movies",
    "Gaming",
    "News",
    "Sports",
    "Courses",
    "Podcasts",
    "Library",
    "History",
  ];
  return (
    <div className="w-50 min-w-50 shrink-0 h-screen bg-base-200 border-r border-gray-600 p-4 overflow-y-auto no-scrollbar">
      <div className="mb-6">
        <ul className="space-y-1">
          {content.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-black/30 p-2 rounded-lg font-medium text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4 border-gray-600" />
      <div>
        <h1 className="text-md font-bold mb-3 text-white uppercase tracking-wide">
          Explore
        </h1>
        <ul className="space-y-1">
          {explore.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-black/30 p-2 rounded-lg font-medium text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBar;

import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-600 w-24 md:w-140 rounded-l-lg px-4 py-2 bg-base-200"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onFocus={() => setshowSuggestions(true)}
        onBlur={() => setshowSuggestions(false)}
      />
      <button className="border border-gray-600 px-3 py-2 border-l-0 rounded-r-lg hover:bg-gray-700 bg-base-200">
        🔍
      </button>
      {showSuggestions && searchText && (
        <div className="absolute bg-base-200/90 py-2 px-4 w-140 shadow-lg rounded-lg mt-1 border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="px-2 py-2 hover:bg-black/30 p-2 rounded-lg text-medium transition-colors duration-300"
              >
                <span className="pr-4 text-gray-400 font-extrabold">⌲</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

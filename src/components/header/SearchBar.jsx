import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!searchText.trim()) {
      return;
    }

    let ignore = false;
    const timer = setTimeout(() => {
      const loadSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const json = await data.json();

        if (!ignore) {
          setSuggestions(json[1] ?? []);
        }
      };

      loadSuggestions();
    }, 200);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full min-w-0 rounded-l-lg border border-gray-600 bg-base-200 px-3 py-2 text-sm sm:px-4 sm:text-base"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
            if (!value.trim()) {
              setSuggestions([]);
            }
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
        />
        <button className="rounded-r-lg border border-l-0 border-gray-600 bg-base-200 px-3 py-2 text-sm hover:bg-gray-700 sm:px-4 sm:text-base">
          Go
        </button>
      </div>
      {showSuggestions && searchText && (
        <div className="absolute left-0 right-0 mt-1 rounded-lg border border-white/10 bg-base-200/95 px-3 py-2 shadow-lg">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="rounded-lg px-2 py-2 text-medium transition-colors duration-300 hover:bg-black/30"
              >
                <span className="pr-4 text-gray-400 font-extrabold">Search</span>
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

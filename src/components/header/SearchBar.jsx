const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-600 w-24 md:w-120 rounded-l-lg px-4 py-2"
      />
      <button className="border border-gray-600 px-2 py-2 border-l-0 rounded-r-lg hover:bg-gray-700">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;

const SearchBar = ({ onSearch }) => {
  return (
    <input
    className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Search by name or mobile"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
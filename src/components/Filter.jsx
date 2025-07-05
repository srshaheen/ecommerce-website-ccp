export default function Filter({ searchText, setSearchText, sortOption, setSortOption }) {
  return (
    <div className="max-w-6xl mx-auto flex justify-between my-4">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 text-lg py-1 border-gray-700 focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <select className="border border-gray-700" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">--select--</option>
          <option value="high-to-low">High - Low</option>
          <option value="low-to-high">Low - High</option>
        </select>
      </div>
    </div>
  );
}

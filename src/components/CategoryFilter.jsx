const CategoryFilter = ({ filterCategory, setFilterCategory }) => {
  return (
    <select
      className="category-filter"
      value={filterCategory}
      onChange={(e) => setFilterCategory(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Health">Health</option>
      <option value="Fitness">Fitness</option>
      <option value="Personal">Personal</option>
      <option value="Learning">Learning</option>
    </select>
  );
};

export default CategoryFilter;

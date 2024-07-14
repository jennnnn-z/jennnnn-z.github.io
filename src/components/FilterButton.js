const FilterButton = ({ category, filterSelection, currentFilter }) => (
  <div
    className={`filter-button ${currentFilter === category ? 'active' : ''} gap-1`}
    type="button"
    onClick={() => filterSelection(category)}
  >
    {category}
  </div>
);

export default FilterButton;
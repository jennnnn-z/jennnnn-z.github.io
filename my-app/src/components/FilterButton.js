const FilterButton = ({ category, filterSelection, currentFilter }) => (
  <button
    className={`cta-btn cta-btn--hero hero-cta ${currentFilter === category ? 'active' : ''}`}
    type="button"
    onClick={() => filterSelection(category)}
    style={{ color: 'black' }}
  >
    {category}
  </button>
);

export default FilterButton;
const FilterButton = ({ category, filterSelection }) => (
  <button
    className={`cta-btn cta-btn--hero hero-cta`}
    type="button"
    onClick={() => filterSelection(category)}
  >
    {category}
  </button>
);

export default FilterButton;
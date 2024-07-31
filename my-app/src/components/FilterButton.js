import { motion } from 'framer-motion';

const FilterButton = ({ category, filterSelection, currentFilter }) => (
  <motion.div
    className={`filter-button ${
      currentFilter === category ? "active" : ""
    } gap-1`}
    type="button"
    onClick={() => filterSelection(category)}
    transition={{ duration: 5, ease: "easeInOut" }}
  >
    {category}
  </motion.div>
);

export default FilterButton;
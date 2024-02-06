import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {

  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 1000
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.element
}
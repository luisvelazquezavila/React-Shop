import { Box } from "@mui/material";
import { useId } from "react";
import { PropTypes } from "prop-types";
import useFilters from "../hooks/useFilters";

export default function Filters() {

  const { filters, setFilters } = useFilters();

  const maxPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: e.target.value
    }))
  };

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: 700,
        "& > div": {
          display: "flex",
          gap: "1rem"
        }
      }}
    >
      <div>
        <label htmlFor={maxPriceFilterId}>Precio Máximo</label>
        <input 
          type="range" 
          id={maxPriceFilterId}
          min="0"
          max="2000"
          onChange={handleChangePrice}
          value={filters.maxPrice}
        />
        <span>{filters.maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Protección de la piel</option>
        </select>
      </div>     
    </Box>
  )
}

Filters.propTypes = {
  onChange: PropTypes.func
}
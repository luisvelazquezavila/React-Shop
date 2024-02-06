import { PropTypes } from "prop-types";
import Filters from "./Filters";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box component="header" sx={{padding: "1rem 2rem"}}>
      <Typography 
        component="h1"
        sx={{
          fontSize: "clamp(1.5rem, 3vw, 4rem)",
          mb: "1rem"
        }}
      >
          Tienda con React 🛒
      </Typography>
      <Filters />
    </Box>
  )
}

Header.propTypes = {
  children: PropTypes.element
}
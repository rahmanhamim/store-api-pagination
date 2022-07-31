import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = ({
  fetchSearchedProducts,
  searchInputText,
  setSearchInputText,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#27C8A4" }} elevation={0}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: "block",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: ".0.5em",
                  }}
                >
                  <img width="40px" src="/assets/images/site-logo.svg" alt="" />
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    My Store
                  </Typography>
                </Box>
              </Link>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    pointerEvents: "all",
                    position: "relative",
                    zIndex: "100",
                    cursor: "pointer",
                    width: "35px",
                  }}
                  onClick={() => fetchSearchedProducts(searchInputText)}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={(e) => setSearchInputText(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    fetchSearchedProducts(searchInputText);
                  }
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = ({ movies, updateSearch }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          IMDb
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Search for movies
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              movies={movies}
              onChange={(event) => updateSearch(event)}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

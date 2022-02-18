import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar classes={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          IMDb
        </Typography>
        <Box display="flex">
          <Typography variant="h6">Search for movies</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

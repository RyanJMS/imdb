import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const MovieList = ({ movies }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {movies?.map((movie, index) => (
          <Grid item xs={4} s={4}>
            <Card elevation={6} style={{ height: 500 }}>
              <CardMedia
                style={{ height: 350, width: 300 }}
                image={movie.Poster}
                alt={movie.Title}
                key={index}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {movie.Title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;

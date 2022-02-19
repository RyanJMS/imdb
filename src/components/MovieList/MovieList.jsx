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
      <Grid container spacing={2} justify="center">
        {movies?.map((movie, index) => (
          <Grid item xs="auto" sm={6} md={4} lg={3}>
            <Card
              elevation={6}
              style={{
                height: 600,
                width: 300,
              }}
              className="card"
            >
              <CardMedia
                style={{ height: 450, width: 300 }}
                image={movie.Poster}
                alt={movie.Title}
                key={index}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {movie.Title}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {movie.Year}
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

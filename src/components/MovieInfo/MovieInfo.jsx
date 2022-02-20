import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

const MovieInfo = ({ selectedMovie, setSelectedMovie }) => {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${selectedMovie}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieInfo(data);
      });
  }, [selectedMovie]);
  return (
    <Card sx={{ display: "flex" }} style={{ marginBottom: "15px" }} id="main">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movieInfo?.Title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Genre:</strong> {movieInfo?.Genre}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Director:</strong> {movieInfo?.Director}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Writer:</strong> {movieInfo?.Writer}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Actors:</strong> {movieInfo?.Actors}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Plot:</strong> {movieInfo?.Plot}
          </Typography>
        </CardContent>
        <Button
          onClick={() => setSelectedMovie()}
          variant="text"
          style={{
            backgroundColor: "#ff4569",
            width: 200,
            alignSelf: "center",
          }}
        >
          X
        </Button>
      </Box>
    </Card>
  );
};

export default MovieInfo;

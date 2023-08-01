import { useEffect, useState } from "react";

import styles from "../MoviesGrid.module.css";
import MovieCard from "./movieCard";

export function MovieGrid() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWZjYTE2YTg5NTY5ZWU3NmQzZTZhOWJiOWU1MGE3ZCIsInN1YiI6IjY0YzgxNjNkZDZjMzAwMDBlNDQ5N2Y1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfHUjxMYn9TUIxeAqMU6Se3zWUeN-TisI-8cBOU7hao",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

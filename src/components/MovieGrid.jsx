import { useEffect, useState } from "react";
import { get } from "../utils/httpClient"
import styles from "../MoviesGrid.module.css";
import MovieCard from "./movieCard";



export function MovieGrid() {  
  const [movies, setMovies] = useState([]);
  
 
  
  useEffect(() => {
    get("/discover/movie").then((data) => {
        setMovies(data.results);
      });
  },[]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

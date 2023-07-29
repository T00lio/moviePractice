import movies from "../movies.json";
import styles from '../MoviesGrid.module.css'
import MovieCard from './movieCard'

export function MovieGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

import React from 'react'
import { MovieGrid } from './MovieGrid';

function MovieApp() {
  return (
    <div>
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        <MovieGrid />
      </main>
    </div>
  )
}

export default MovieApp;
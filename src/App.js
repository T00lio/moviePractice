import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';




function App() {
  return (
    <Router>
      <header>
        <Link>
          <h1 className={styles.title}>Movies</h1>
        </Link>
      
      </header>
      <main>
          <Routes>
            <Route path="/movie/:movie.id" element={<MovieDetails/>}>
            </Route>
            <Route path="/" element={<LandingPage/>}>
            </Route>
          </Routes>

      </main>
    </Router>
  );
}

export default App;

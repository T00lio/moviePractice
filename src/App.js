
import styles from './App.module.css';

import { MovieGrid } from './components/MovieGrid';

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MovieGrid />
      </main>
    </div>
  );
}

export default App;

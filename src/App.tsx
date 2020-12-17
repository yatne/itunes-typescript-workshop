import styles from './App.module.css';
import { Counter } from './components/Counter/Counter';
import { ITunes } from './components/ITunes/ITunes';

function App() {
  return (
    <div className={styles['App']}>
      <header
        className={styles['App-header']}
        style={{ backgroundColor: 'wheat' }}
      >
        <ITunes />
      </header>
    </div>
  );
}

export default App;

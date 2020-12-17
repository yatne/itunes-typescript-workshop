import styles from './App.module.css';
import {Counter} from "./components/Counter/Counter";

function App() {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <Counter/>
      </header>
    </div>
  );
}

export default App;

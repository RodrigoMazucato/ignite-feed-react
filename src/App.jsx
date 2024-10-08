import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}></div>
    </>
  );
}

export default App;

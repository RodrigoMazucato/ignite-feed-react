import igniteLogo from "/ignite-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}

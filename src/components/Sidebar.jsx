import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import coverProfile from "../assets/cover-profile.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverProfile} />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/rodrigomazucato.png"
        />
        <strong>Rodrigo Mazucato</strong>
        <span>Full-stack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

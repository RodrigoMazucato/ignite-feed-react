import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";
import { PencilLine } from "phosphor-react";
import coverProfile from "../assets/cover-profile.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={coverProfile} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/rodrigomazucato.png" />
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

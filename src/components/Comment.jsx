import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";

export function Comment({ text, onDelete }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rocketseat.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Devon Lane <span>(você)</span>
              </strong>
              <time title="7 de Outubro às 21:48" dateTime="2024-10-07 21:48">
                Cerca de 2h
              </time>
            </div>
            <button title="Deletar comentário" onClick={() => onDelete(text)}>
              <Trash size={24} />
            </button>
          </header>
          <p>{text}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

import { Avatar } from "./Avatar";
import { profileImage } from "./Sidebar";
import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import styles from "./Comment.module.css";
import postData from "../posts.json";

interface Comment {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

export function Comment({ id, text, onDelete }: Comment) {
  const [likeCount, setLikeCount] = useState(0);
  const authorName = postData[0].author.name;
  const currentDate = Date.now();
  const formattedDate = format(currentDate, "d 'de' MMMM 'de' y 'às' H:mm", {
    locale: ptBR,
  });
  const dateDifference = formatDistanceToNow(currentDate, {
    addSuffix: true,
    locale: ptBR,
  });
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profileImage} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                {authorName} <span>(você)</span>
              </strong>
              <time title={formattedDate} dateTime={currentDate.toString()}>
                {dateDifference}
              </time>
            </div>
            <button title="Deletar comentário" onClick={() => onDelete(id)}>
              <Trash size={24} />
            </button>
          </header>
          <p>{text}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

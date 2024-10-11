import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow, formatISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const dateDifference = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const formattedDate = format(publishedAt, "d 'de' MMMM 'de' y 'às' H:mm", {
    locale: ptBR,
  });
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");

  function deleteComment(idToDelete) {
    const commentsWithoutDeletedOne = commentList.filter(
      (_, index) => index != idToDelete
    );
    console.log(commentsWithoutDeletedOne);
    setCommentList(commentsWithoutDeletedOne);
  }
  return (
    <main className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={formattedDate} dateTime={formatISO(publishedAt)}>
          Publicado {dateDifference}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          switch (line.type) {
            case "paragraph":
              return <p key={index}>{line.text}</p>;
            case "link":
              return (
                <p key={index}>
                  <a
                    href={`https://${line.text}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    👉 {line.text}
                  </a>
                </p>
              );
          }
        })}

        <p className={styles.hashtags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form
        className={styles.commentForm}
        onSubmit={() => {
          event.preventDefault();
          setCommentList([...commentList, newComment]);
          setNewComment("");
        }}
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário..."
          value={newComment}
          onChange={() => {
            setNewComment(event.target.value);
          }}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {commentList.map((comment, index) => {
          return (
            <Comment
              key={index}
              id={index}
              text={comment}
              onDelete={deleteComment}
            />
          );
        })}
      </div>
    </main>
  );
}

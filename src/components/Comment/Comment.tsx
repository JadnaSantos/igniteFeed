import styles from "./Comment.module.css";
import { Trash, ThumbsUp, ThumbsDown } from 'phosphor-react'
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface CommentProps {
  content : string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps ) {

  const [likeCount, setLikeCount] = useState(0)

  const [desLikeCount, setdesLikeCount] = useState(0)

  function handleDeleteComent () {
    onDeleteComment(content);
  }

  function handleLikeComment () {
    setLikeCount((state) => {
      return state + 1
    });
  }
  
  function handleDesLikeComment () {
    setdesLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JadnaSantos.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jad</strong>
              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComent} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
          <button onClick={handleDesLikeComment}>
            <ThumbsDown />
            Deslike <span>{desLikeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

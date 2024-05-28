import React from "react";
import styles from './post.module.css';
import comment from '../../media/comment.svg';
import { Comment } from "../Comment/comment";
import { useState } from "react";

export function Post({ post, comments }) {

    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
        comments(post.permalink);

    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>{post.title}</h5>
                </div>
                <div className={styles.content}>
                    <img src={post.url} />
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: <span className={styles.postUsername}>{post.author}</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} src={comment} /></span>
                </div>
                {isClicked &&
                    <div className={styles.comments}>
                        {post.comments.map((comment) => {
                            return (<Comment comment={comment} key={comment.id} />)
                        })}
                    </div>}
            </div>


        </>
    )
}

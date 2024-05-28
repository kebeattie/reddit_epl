import React from "react";
import styles from './comment.module.css'

export function Comment (props) {

    const {comment} = props;
    
    return (
        <div className={styles.commentContainer}>
            <p className={styles.commentUsername}>{comment.author}</p>
            <p className={styles.commentContent}>{comment.body}</p>
        </div>  
    )
}
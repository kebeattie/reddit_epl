import React from "react";
import styles from './comment.module.css'

export function Comment ({ username, commentText }) {
    return (
        <div className={styles.commentContainer}>
            <p className={styles.commentUsername}>{username}</p>
            <p className={styles.commentContent}>{commentText}</p>
        </div>  
    )
}
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
    const renderComment = () => {
        if (post.isLoadingComments) {
            return (
                <p className={styles.commentLoading}>Loading...</p>
            )
        } else if (post.comments.length < 1) {
            return (
                <p className={styles.commentNotFound}>No Comments found</p>
            )
        } else {
            return (
                post.comments.map ((comment) => {
                   return <Comment comment={comment} key={comment.id} />
                }) 

                
            )
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>{post.title}</h5>
                </div>
                <div className={styles.content}>
                    <img src={post.url} alt="Content unable to load due to Reddit's API limitations" />
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: <span className={styles.postUsername}>{post.author}</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} alt='A comment icon' src={comment} /></span>
                </div>
                {isClicked &&
                    <div className={styles.comments}>
                        {renderComment()}
                    </div>}
            </div>


        </>
    )
}

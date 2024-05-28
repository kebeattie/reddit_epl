import React from "react";
import styles from './post.module.css';
import klopp from '../../media/klopp.png';
import comment from '../../media/comment.svg';
import { Comment } from "../Comment/comment";
import { useState } from "react";

export function Post({ post }) {

    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>{post.title}</h5>
                </div>
                <div className={styles.content}>
                    <img src={post.url}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: <span className={styles.postUsername}>{post.author}</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
                {isClicked && <div className={styles.comments}>
                    <Comment username='Hazy74' commentText="I'm so glad, that Jurgen is a red." />
                    <Comment username='redmon334' commentText="I'm so glad, he delivered what he said." />
                    
                </div> }
            </div>

        </>
    )
}
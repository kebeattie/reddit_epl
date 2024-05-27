import React from "react";
import styles from './post.module.css';
import klopp from '../../media/klopp.png'
import comment from '../../media/comment.svg'

export function Post() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>After 8 years, Jurgen Klopp leaves Liverpool.</h5>
                </div>
                <div className={styles.content}>
                    <img src={klopp}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: lfcfella2k7</p></span><span className={styles.comment}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>After 8 years, Jurgen Klopp leaves Liverpool.</h5>
                </div>
                <div className={styles.content}>
                    <img src={klopp}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: lfcfella2k7</p></span><span className={styles.comment}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
            </div>
        </>
    )
}
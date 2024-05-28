import React from "react";
import styles from './post.module.css';
import klopp from '../../media/klopp.png';
import comment from '../../media/comment.svg';
import { Comment } from "../Comment/comment";
import { useState } from "react";

export function Post() {

    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked(!isClicked);
    }

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
                    <span><p>Posted by: <span className={styles.postUsername}>lfcfella2k7</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
                {isClicked && <div className={styles.comments}>
                    <Comment username='Hazy74' commentText="I'm so glad, that Jurgen is a red." />
                    <Comment username='redmon334' commentText="I'm so glad, he delivered what he said." />
                    
                </div> }
            </div>

            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>After 8 years, Jurgen Klopp leaves Liverpool.</h5>
                </div>
                <div className={styles.content}>
                    <img src={klopp}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: <span className={styles.postUsername}>lfcfella2k7</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
                {isClicked && <div className={styles.comments}>
                    <Comment username='Hazy74' commentText="I'm so glad, that Jurgen is a red." />
                    <Comment username='redmon334' commentText="I'm so glad, he delivered what he said." />
                    
                </div> }
            </div>

            <div className={styles.container}>
                <div className={styles.title}>
                    <h5>After 8 years, Jurgen Klopp leaves Liverpool.</h5>
                </div>
                <div className={styles.content}>
                    <img src={klopp}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: <span className={styles.postUsername}>lfcfella2k7</span></p></span><span className={styles.comment} onClick={clickHandler}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
                {isClicked && <div className={styles.comments}>
                    <Comment username='Hazy74' commentText="I'm so glad, that Jurgen is a red." />
                    <Comment username='redmon334' commentText="I'm so glad, he delivered what he said." />
                    
                </div> }
            </div>


            {/* <div className={styles.container}>
                <div className={styles.title}>
                    <h5>After 8 years, Jurgen Klopp leaves Liverpool.</h5>
                </div>
                <div className={styles.content}>
                    <img src={klopp}/>
                </div>
                <div className={styles.metaData}>
                    <span><p>Posted by: lfcfella2k7</p></span><span className={styles.comment}><img className={styles.commentIcon} src={comment}/>123</span>
                </div>
            </div> */}
        </>
    )
}
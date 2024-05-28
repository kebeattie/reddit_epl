import React from "react";
import styles from './nav.module.css';
import { useState } from "react";
import { setChosenSubreddit } from "../../features/reddit/redditSlice";
import { useDispatch } from "react-redux";

export function Nav() {

    const [showNav, setShowNav] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowNav(!showNav)
    }

    const handleChooseSubreddit = (subreddit) => {
        dispatch(setChosenSubreddit(subreddit));
        console.log('test')
    }

    
    

    return (
        <>
            <div className={styles.container} onClick={handleClick}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
            {showNav && <div className={styles.navList}>
                <ul>
                    <li>r/mcfc</li>
                    <li>r/gunners</li>
                    <li>r/LiverpoolFC</li>
                    <li><div onMouseDown={handleChooseSubreddit('/r/avfc/')}>r/avfc</div></li>
                    <li>r/coys</li>
                    <li>r/chelseafc</li>
                </ul>
            </div> }
        </>
    )
}

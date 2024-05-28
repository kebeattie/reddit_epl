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

    return (
        <>
            <div className={styles.container} onClick={handleClick}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
            {showNav && 
            <div className={styles.navList}>
                <ul>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/soccerbanners/'))}>r/soccerbanners</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/PremierLeague/'))}>r/PremierLeague</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/mcfc/'))}>r/mcfc</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/gunners/'))}>r/gunners</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/LiverpoolFC/'))}>r/LiverpoolFC</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/avfc/'))}>r/avfc</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/coys/'))}>r/coys</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/chelseafc/'))}>r/chelseafc</li>
                    <li onClick={() => dispatch(setChosenSubreddit('/r/TheOther14/'))}>r/TheOther14</li>
                </ul>
            </div> }
        </>
    )
}

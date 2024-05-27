import React from "react";
import styles from './nav.module.css';
import { useState } from "react";

export function Nav() {

    const [showNav, setShowNav] = useState(false);

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
            {showNav && <div className={styles.navList}>
                <ul>
                    <li>r/mcfc</li>
                    <li>r/gunners</li>
                    <li>r/LiverpoolFc</li>
                    <li>r/avfc</li>
                    <li>r/coys</li>
                    <li>r/chelseafc</li>
                </ul>
            </div> }
        </>
    )
}
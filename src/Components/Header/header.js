import React from "react";
import styles from './header.module.css'
import file from '../../media/file.png'

export function Header() {

    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <header>
                <div className={styles.logoAndTitle}>
                    <img className={styles.eplLogo} src={file} />
                    <h1 className={styles.title}>Reddit<span className={styles.eplText}>EPL</span></h1>
                </div>
                <form onSubmit={submitHandler}>
                    <input className={styles.searchBar} type='text' placeholder="Search"/>
                </form>

            </header>
        </>
    )
}
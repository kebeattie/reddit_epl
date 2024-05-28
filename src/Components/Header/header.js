import React from "react";
import styles from './header.module.css'
import file from '../../media/file.png'
import { setSearchQuery } from "../../features/reddit/redditSlice";
import { useDispatch} from "react-redux";
import { useState } from "react";

export function Header() {
    const dispatch = useDispatch();
    const [localSearch, setLocalSearch] = useState('')

    const queryChange = (event) => {
        setLocalSearch(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(localSearch))
        
    }
    
    return (
        <>
            <header>
                <div className={styles.logoAndTitle}>
                    <img className={styles.eplLogo} src={file} alt='The premier league logo' />
                    <h1 className={styles.title}>Reddit<span className={styles.eplText}>EPL</span></h1>
                </div>
                <form onSubmit={submitHandler}>
                    <input onChange={queryChange}className={styles.searchBar} type='text' placeholder="Search"/>
                </form>

            </header>
        </>
    )
}


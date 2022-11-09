import React from 'react';
import {Link} from "react-router-dom";
import styles from './navigation.module.css';

export const Navigation = () => {
    return(
        <nav className={styles.navigation}>
            <div className={styles.navItem}>
                <Link to="/movies/all">Movies</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/series/all">Series</Link>
            </div>
            <div className={styles.navItem}>
                <Link to="/animes/all">Animes</Link>
            </div>
        </nav>
    )
};
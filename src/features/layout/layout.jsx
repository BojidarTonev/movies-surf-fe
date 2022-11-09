import React from 'react';
import {Outlet} from "react-router-dom";
import {SearchBar} from "../../components/searchBar/searchBar";
import {Navigation} from "../../components/navigation/navigation";
import styles from './layout.module.css';

export const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div className={styles.titleWrapper}>
                    <h1>MOVIE SURF</h1>
                    <h4>sample subheader</h4>
                </div>

                <SearchBar/>
            </div>
            <Navigation/>

            <Outlet/>
        </div>
    );
};
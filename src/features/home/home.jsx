import React from 'react';
import {ItemsSection} from "../../components/itemsSection/itemsSection";
import styles from './home.module.css';

export const Home = (props) => {

    return(<div className={styles.home}>
        <p>selected filter</p>
        <div>drop down </div>
        <ItemsSection/>
    </div>)
};
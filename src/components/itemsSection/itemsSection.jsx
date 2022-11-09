import React from 'react';
import styles from './itemsSection.module.sass';
import {InfoSection} from "../infoSection/infoSection";
import {ItemCard} from "../itemCard/itemCard";

export const ItemsSection = (props) => {
    return(<div>
        <InfoSection/>
        <ItemCard/>
    </div>)
};
import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
               <a className={styles.navitem} href="#dashboard">Dashboard</a>
               <a className={styles.navitem} href="#wiki">Wiki</a>
               <a className={styles.navitem} href="#about">About </a>
          

            </nav>
        </div>
    );
};

export default Navigation;

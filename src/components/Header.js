import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.myheader}>
            <h1>My Todo List</h1>
        </header>
    );
};

export default Header;
// components/Accordion.js

import { useState } from 'react';
import styles from './Accordion.module.css'; // Import CSS styles for the component

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHeader} onClick={toggleAccordion}>
                <span className={styles.title}>{title}</span>
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}></span>
            </div>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;

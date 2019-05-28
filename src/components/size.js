import styles from './size.module.css';
import React,{ useState } from 'react';

const fixStyle = (styles) => styles.join(' ');

export default () => {
    const [gridTemplateColumns, setgridTemplateColumns] = useState(['1fr','50px','1fr']);
    const [gridTemplateRows, setgridTemplateRows] = useState(['1fr','1fr']);
    const [gridGap, setgridGap] = useState(['10px','10px']);
    return (
        <div className={styles.size_content}>
            <span></span>
        </div>
    )
}

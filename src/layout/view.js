import styles from './view.module.css';
import React,{ useState } from 'react';

const fixStyle = (styles) => styles.join(' ');

export default () => {
    const [gridTemplateColumns, setgridTemplateColumns] = useState(['1fr','1fr']);
    const [gridTemplateRows, setgridTemplateRows] = useState(['1fr','1fr']);
    return (
        <div className={styles.grid_content}>
            <div className={styles.toolbar_v}>v</div>
            <div className={styles.flex}>
                <div className={styles.toolbar_h}>h</div>
                <div className={styles.grid} style={{gridTemplateColumns:fixStyle(gridTemplateColumns),gridTemplateRows:fixStyle(gridTemplateRows)}}>
                    {
                        new Array(gridTemplateColumns.length * gridTemplateRows.length).fill('').map((el,i)=>(<div key={i} className={styles.grid_item}></div>))
                    }
                </div>
            </div>
        </div>
    )
}

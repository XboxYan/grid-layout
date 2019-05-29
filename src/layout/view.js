import styles from './view.module.css';
import React,{ useState } from 'react';

const fixStyle = (styles) => styles.join(' ');

export default () => {
    const [gridTemplateColumns, setgridTemplateColumns] = useState(['1fr','50px','1fr']);
    const [gridTemplateRows, setgridTemplateRows] = useState(['1fr','1fr']);
    const [gridGap, setgridGap] = useState(['10px','10px']);
    return (
        <div className={styles.grid_content}>
            <div className={styles.toolbar_v}>v</div>
            <div className={styles.flex}>
                <div className={styles.toolbar_h}>h</div>
                <div className={styles.grid} onTransitionEnd={()=>console.log('end')} onAnimationIteration={()=>console.log('run')} onAnimationEnd={()=>console.log('end')} style={{gridTemplateColumns:fixStyle(gridTemplateColumns),gridTemplateRows:fixStyle(gridTemplateRows),gridGap:fixStyle(gridGap)}}>
                    {
                        [...Array(gridTemplateColumns.length * gridTemplateRows.length).keys()].map((el,i)=>(<div key={i} className={styles.grid_item}></div>))
                    }
                </div>
            </div>
        </div>
    )
}

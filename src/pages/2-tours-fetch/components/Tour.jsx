import { useState } from 'react';
import styles from '../styles/tour.module.css';

export default function Tour(props) {
    let [reticences, setReticences] = useState(true);
    function infoReticences() {
        let info = [...props.info];
        info = info.slice(0, 200);
        return info;
    }

    return (
        <li className={styles.liContainer}>
            <img
                src={props.image}
                alt={props.name + 'image'}
                className={styles.image}
            />
            <div className={styles.infosContainer}>
                <div className={styles.namePrice}>
                    <h3 className={styles.name}>{props.name}</h3>
                    <p className={styles.price}>$ {props.price}</p>
                </div>
                {reticences ? (
                    <p className={styles.info}>
                        {infoReticences()}...{' '}
                        <button onClick={() => setReticences(false)}>
                            Load more
                        </button>
                    </p>
                ) : (
                    <p className={styles.info}>{props.info}</p>
                )}
                <button
                    className={styles.button}
                    onClick={(e) => props.func(props.id)}
                >
                    Not interested
                </button>
            </div>
        </li>
    );
}

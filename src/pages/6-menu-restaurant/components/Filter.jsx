import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import styles from '../styles/filter.module.css';

let Filter = () => {
    let { setType } = useContext(AppContext);
    useEffect(() => {
        document.getElementById('all').classList.add(styles.active);
    }, []);

    let handleSelectType = (e) => {
        setType(e.target.id);
        document.querySelectorAll(`.${styles.button}`).forEach((button) => {
            button.classList.remove(styles.active);
        });
        e.target.classList.add(styles.active);
    };

    return (
        <div className={styles.filterContainer}>
            <ul className={styles.filterContent}>
                <li>
                    <button
                        className={styles.button}
                        id="all"
                        onClick={handleSelectType}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        className={styles.button}
                        id="breakfast"
                        onClick={handleSelectType}
                    >
                        Breakfast
                    </button>
                </li>
                <li>
                    <button
                        className={styles.button}
                        id="lunch"
                        onClick={handleSelectType}
                    >
                        Lunch
                    </button>
                </li>
                <li>
                    <button
                        className={styles.button}
                        id="shakes"
                        onClick={handleSelectType}
                    >
                        Shakes
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Filter;

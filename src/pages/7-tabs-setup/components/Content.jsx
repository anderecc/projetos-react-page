import { useContext } from 'react';
import { AppContext } from '../context';
import Companies from './Companies';
import Experience from './Experience';
import styles from '../styles/content.module.css';

let Content = () => {
    let { loading } = useContext(AppContext);

    return (
        <div className={styles.body}>
            <div className={styles.app}>
                {loading ? (
                    <div className={styles.loading}>Loading...</div>
                ) : (
                    <>
                        <h1 className={styles.title}>Experience</h1>
                        <div className={styles.container}>
                            <Companies></Companies>
                            <Experience></Experience>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Content;

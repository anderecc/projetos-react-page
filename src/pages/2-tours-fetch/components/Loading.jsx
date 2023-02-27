import styles from '../styles/loading.module.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
    return (
        <div className={styles.loading}>
            <AiOutlineLoading3Quarters />
        </div>
    );
}

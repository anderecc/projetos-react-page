import styles from '../styles/response.module.css';

let Response = ({ response }) => {
    return <div className={styles.responseContainer}>{response}</div>;
};

export default Response;

import styles from '../styles/people.module.css';

function People({ name, age, image, id }) {
    return (
        <li className={styles.people} key={id}>
            <img src={image} alt={`${name}-pic`} className={styles.image} />
            <div className={styles.containerName}>
                <p className={styles.p}>
                    Name: <strong>{name}</strong>
                </p>
                <p>Age: {age}</p>
            </div>
        </li>
    );
}

export default People;

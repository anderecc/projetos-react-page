import styles from '../styles/item.module.css';

let Item = ({ props }) => {
    let { id, img, title, desc, price } = props;

    return (
        <li className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={img}
                    alt={`${title} ${id}`}
                />
            </div>
            <div className={styles.infosContainer}>
                <p className={styles.itemTitle}>
                    {title} <span className={styles.itemPrice}>$ {price}</span>
                </p>
                <hr />
                <p className={styles.itemDescription}>{desc}</p>
            </div>
        </li>
    );
};

export default Item;

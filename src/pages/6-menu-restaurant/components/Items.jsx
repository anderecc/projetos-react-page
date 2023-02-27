import { useContext } from 'react';
import { AppContext } from '../context';
import Item from './Item';
import styles from '../styles/items.module.css';

let Items = () => {
    let { state } = useContext(AppContext);
    let { type } = useContext(AppContext);

    let renderItems = () => {
        return state ? (
            state.map((item) => {
                return type === 'all' ? (
                    <Item key={item.id} props={item}></Item>
                ) : type === item.category ? (
                    <Item key={item.id} props={item}></Item>
                ) : null;
            })
        ) : (
            <></>
        );
    };

    return <div className={styles.itemsContainer}>{renderItems()}</div>;
};

export default Items;

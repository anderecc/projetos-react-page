import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import Item from './Item';
import styles from '../styles/listItem.module.css';

let ListItem = () => {
    let { todos } = useContext(AppContext);

    let renderTodo = () => {
        return todos.map((todo) => {
            return <Item key={todo.id} todo={todo}></Item>;
        });
    };
    return <ul className={styles.container}>{renderTodo()}</ul>;
};

export default ListItem;

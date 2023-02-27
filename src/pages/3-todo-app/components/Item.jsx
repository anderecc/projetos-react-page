import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import styles from '../styles/item.module.css';

const Item = ({ todo }) => {
    let { handleDeletTodo, todos, setTodoEdit } = useContext(AppContext);

    return (
        <li key={todo.id} className={styles.item} id={todo.id}>
            {todo.title}
            <div className={styles.buttonContainer}>
                <button
                    className={`${styles.button} ${styles.buttonEdit}`}
                    onClick={() => setTodoEdit(todo)}
                >
                    Editar
                </button>

                <button
                    className={`${styles.button} ${styles.buttonDelet}`}
                    onClick={(e) => {
                        let newTodos = todos.filter(
                            (todo) =>
                                todo.id !== +e.target.parentNode.parentNode.id
                        );
                        newTodos.map((todo, index) => (todo.id = index + 1));
                        localStorage.setItem('todos', JSON.stringify(newTodos));
                        handleDeletTodo(newTodos);
                    }}
                >
                    Excluir
                </button>
            </div>
        </li>
    );
};

export default Item;

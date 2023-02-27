import React, { useEffect } from 'react';
import ListItem from './components/ListItem';
import AddTodo from './components/AddTodo';
import TodoProvider from './context/context';
import styles from './styles/app.module.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

const App = () => {
    useTitle('React Todo');

    return (
        <TodoProvider>
            <div className={styles.body}>
                <h1 className={styles.title}>
                    Lista de Tarefas com React com os Hooks 'useContext,
                    useState'
                </h1>
                <div className={styles.app}>
                    <ListItem></ListItem>
                    <AddTodo></AddTodo>
                </div>
            </div>
        </TodoProvider>
    );
};

export default App;

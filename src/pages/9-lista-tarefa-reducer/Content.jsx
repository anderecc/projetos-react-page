import { useEffect } from 'react';
import { useContext } from 'react';
import Form from './components/Form';
import Tarefas from './components/Tarefas';
import { AppContext } from './context';
import styles from './styles/app.module.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function Content() {
    useTitle('React Lista de Tarefas');
    let { state } = useContext(AppContext);

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>
                Lista de Tarefas com React com os Hooks 'useContext, useReducer'
            </h1>
            <div className={styles.app}>
                <h3>Insira sua tarefa</h3>

                <Tarefas></Tarefas>
                <Form></Form>
            </div>
            {state.mensagem === 'nova-tarefa' ? (
                <p className={`${styles.mensagem} ${styles.verde}`}>
                    Tarefa Adicionada
                </p>
            ) : state.mensagem === 'tarefa-editada' ? (
                <p className={`${styles.mensagem} ${styles.verde}`}>
                    Tarefa Editada
                </p>
            ) : state.mensagem === 'tarefa-excluida' ? (
                <p className={`${styles.mensagem} ${styles.vermelho}`}>
                    Tarefa Excluida
                </p>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Content;

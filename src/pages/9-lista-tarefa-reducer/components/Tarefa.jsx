import { useContext } from 'react';
import { AppContext } from '../context';
import styles from '../styles/tarefa.module.css';

let Tarefa = ({ valor, ind }) => {
    let { handleEditarTarefa, handleExcluirTarefa } = useContext(AppContext);
    return (
        <li key={ind} className={styles.tarefaContainer}>
            <p className={styles.tarefa}>{valor}</p>
            <div>
                <button
                    className={`${styles.button} ${styles.buttonEditar}`}
                    onClick={() => handleEditarTarefa(ind)}
                >
                    Editar
                </button>
                <button
                    className={`${styles.button} ${styles.buttonExcluir}`}
                    onClick={() => handleExcluirTarefa(ind)}
                >
                    Excluir
                </button>
            </div>
        </li>
    );
};

export default Tarefa;

import { useContext } from 'react';
import { AppContext } from '../context';
import styles from '../styles/form.module.css';

let Form = () => {
    let { state, handleSetValue, handleSetNovaTarefa, handleSetTarefaEditada } =
        useContext(AppContext);

    return (
        <form>
            <input
                className={styles.input}
                type="text"
                value={state.value}
                onChange={handleSetValue}
                placeholder="Digite sua tarefa"
            />
            {!state.editar ? (
                <button
                    className={`${styles.button} ${styles.buttonForm}`}
                    onClick={handleSetNovaTarefa}
                >
                    Nova
                </button>
            ) : (
                <button
                    className={`${styles.button} ${styles.buttonForm}`}
                    onClick={handleSetTarefaEditada}
                >
                    Salvar
                </button>
            )}
        </form>
    );
};

export default Form;

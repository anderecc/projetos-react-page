import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './context';
import styles from './styles/app.module.css';
function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function Content() {
    useTitle('React Lorem Generetor');
    let { state, loading, value, setValue, getLorems } = useContext(AppContext);

    let handleGenerate = (e) => {
        e.preventDefault();
        getLorems();
    };

    let renderLorems = () => {
        return state ? (
            state.map((lorem, index) => {
                return (
                    <p key={index} className={styles.text}>
                        {lorem}
                    </p>
                );
            })
        ) : (
            <></>
        );
    };

    return (
        <div className={styles.app}>
            <h1 className={styles.title}>Tired of boring lorem ipsum?</h1>
            {!loading ? (
                <>
                    <form className={styles.form}>
                        <label htmlFor="input" className={styles.label}>
                            Paragraphs:
                            <input
                                type="number"
                                id="input"
                                className={styles.input}
                                max={10}
                                min={1}
                                value={value}
                                autoFocus
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </label>
                        <button
                            className={styles.button}
                            onClick={handleGenerate}
                        >
                            Generate
                        </button>
                    </form>
                    <div className={styles.loremContainer}>
                        {renderLorems()}
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Content;

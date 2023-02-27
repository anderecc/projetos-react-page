import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import styles from './styles/app.module.css';

function App() {
    useEffect(() => {
        document.title = 'Projetos React';
    }, []);

    let renderLinks = () => {
        return routes ? (
            routes.map((route) => {
                return route.id > 0 ? (
                    <li key={route.id} className={styles.li}>
                        <Link
                            to={route.path}
                            target="_blank"
                            className={styles.a}
                        >
                            {route.path.split('/').join('')}
                            <div className={styles.div}>
                                <img
                                    src={route.image}
                                    alt={route.path}
                                    className={styles.img}
                                />
                            </div>
                        </Link>
                    </li>
                ) : null;
            })
        ) : (
            <></>
        );
    };

    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <h3 className={styles.h3}>Projetos com React</h3>
            </header>
            <main className={styles.main}>
                <ul className={styles.ul}>{renderLinks()}</ul>
            </main>
        </div>
    );
}

export default App;

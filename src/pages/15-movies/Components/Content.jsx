import { useContext } from 'react';
import { AppContext } from '../Context';
import Card from './Card';
import Form from './Form';
import Loading from './Loading';
import styles from '../Styles/app.module.sass';

function Content() {
    let { state } = useContext(AppContext);

    let renderMovies = () => {
        return state.movies.Response === 'True' ? (
            state.movies.Search.map((movie) => {
                return <Card key={movie.imdbID} props={movie}></Card>;
            })
        ) : state.movies.Response === 'False' ? (
            <p className={styles.error}>
                {state.movies.Error} Please enter a movie.
            </p>
        ) : null;
    };

    return (
        <main className={styles.container}>
            <Form></Form>
            {state.loading ? (
                <Loading></Loading>
            ) : (
                <div className={styles.content}>{renderMovies()}</div>
            )}
        </main>
    );
}

export default Content;

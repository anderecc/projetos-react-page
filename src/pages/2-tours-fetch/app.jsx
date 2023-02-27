import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tour from './components/Tour';
import styles from './styles/app.module.css';

let url = 'https://course-api.com/react-tours-project';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Tours');
    let [state, setState] = useState([]);
    let [loading, setLoading] = useState(false);

    let tours = async () => {
        setLoading(true);
        let response = await fetch(url).then((data) => data.json());
        setState(response);
        setLoading(false);
        console.log(response);
    };

    useEffect(() => {
        tours();
    }, []);

    function notInteresed(index) {
        let newsTours = state.filter((tour) => tour.id !== index);
        setState(newsTours);
    }

    function renderTours() {
        return state.map((tour, index) => {
            return (
                <Tour
                    name={tour.name}
                    price={tour.price}
                    image={tour.image}
                    id={tour.id}
                    key={tour.id}
                    info={tour.info}
                    func={notInteresed}
                />
            );
        });
    }

    return (
        <div className={styles.body}>
            <div className={styles.app}>
                <h1 className={styles.title}>Ours Tours</h1>
                {loading ? (
                    <Loading></Loading>
                ) : (
                    <div className={styles.container}>
                        <ul className={styles.list}>{renderTours()}</ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;

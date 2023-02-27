import { useEffect } from 'react';
import Review from './components/Review';
import ReviewProvider from './context/AppContext';
import styles from './styles/app.module.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Reviews');

    return (
        <ReviewProvider>
            <div className={styles.body}>
                <div className={styles.app}>
                    <h1 className={styles.title}>Our Reviews</h1>
                    <Review></Review>
                </div>
            </div>
        </ReviewProvider>
    );
}

export default App;

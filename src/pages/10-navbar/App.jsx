import { useEffect } from 'react';
import Header from './components/Header';
import AppProvider from './context';

import styles from './styles/app.module.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React NavBar');

    return (
        <AppProvider>
            <div className={styles.body}>
                <div className={styles.app}>
                    <Header />
                </div>
            </div>
        </AppProvider>
    );
}

export default App;

import { useEffect } from 'react';
import Filter from './components/Filter';
import Items from './components/Items';
import AppProvider from './context';
import styles from './styles/app.module.css';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Menu Restaurant');

    return (
        <AppProvider>
            <div className={styles.body}>
                <h1 className={styles.title}>Our Menu</h1>
                <Filter></Filter>
                <Items></Items>
            </div>
        </AppProvider>
    );
}

export default App;

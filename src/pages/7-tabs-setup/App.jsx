import { useEffect } from 'react';
import Content from './components/Content';
import AppProvider from './context';

function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App() {
    useTitle('React Tabs');

    return (
        <AppProvider>
            <Content></Content>
        </AppProvider>
    );
}

export default App;

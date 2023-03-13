import Content from './components/Content';
import AppProvider from './context/header';

function App() {
    return (
        <AppProvider>
            <Content></Content>
        </AppProvider>
    );
}

export default App;

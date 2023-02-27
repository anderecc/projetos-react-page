import Content from './Content';
import AppProvider from './context';

let App = () => {
    return (
        <AppProvider>
            <Content></Content>
        </AppProvider>
    );
};

export default App;

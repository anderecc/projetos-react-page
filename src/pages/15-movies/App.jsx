import Content from './Components/Content';
import AppProvider from './Context';

let App = () => {
    return (
        <AppProvider>
            <Content></Content>
        </AppProvider>
    );
};

export default App;

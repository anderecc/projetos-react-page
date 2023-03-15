import ContentMovie from '../Components/ContentMovie';
import AppProvider from '../Context';

let Movie = () => {
    return (
        <AppProvider>
            <ContentMovie></ContentMovie>
        </AppProvider>
    );
};

export default Movie;

import ContentCocktail from '../components/cocktail/ContentCocktail';
import AppProvider from '../context';

let Cocktail = () => {
    return (
        <AppProvider>
            <ContentCocktail></ContentCocktail>
        </AppProvider>
    );
};

export default Cocktail;

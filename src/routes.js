import App from './App';
import BirthDayReminder from './pages/1-birthday-reminder/app';
import TodoApp from './pages/3-todo-app/App';
import MenuRestaurant from './pages/6-menu-restaurant/App';
import TourFetch from './pages/2-tours-fetch/app';
import ReviewsFetch from './pages/4-reviews-fetch/App';
import Accordion from './pages/5-accordion/App';
import TabsSetup from './pages/7-tabs-setup/App';
import LoremGenerator from './pages/8-lorem-generator/App';
import ListaTarefaReducer from './pages/9-lista-tarefa-reducer/App';
import NavBar from './pages/10-navbar/App';
import Calculator from './pages/11-calculator/App';

let routes = [
    {
        id: 0,
        path: '/',
        element: <App></App>,
    },
    {
        id: 1,
        path: '/1-birthday-reminder',
        element: <BirthDayReminder></BirthDayReminder>,
        image: './images/projetos/1-birthday-reminder.png',
    },
    {
        id: 2,
        path: '/2-tours-fetch',
        element: <TourFetch></TourFetch>,
        image: './images/projetos/2-tours-fetch.png',
    },
    {
        id: 3,
        path: '/3-todo-app',
        element: <TodoApp></TodoApp>,
        image: './images/projetos/3-todo-app.png',
    },
    {
        id: 4,
        path: '/4-reviews-fetch',
        image: './images/projetos/4-reviews-fetch.png',
        element: <ReviewsFetch></ReviewsFetch>,
    },
    {
        id: 5,
        path: '/5-accordion',
        image: './images/projetos/5-accordion.png',
        element: <Accordion></Accordion>,
    },
    {
        id: 6,
        path: '/6-menu-restaurant',
        image: './images/projetos/6-menu-restaurant.png',
        element: <MenuRestaurant></MenuRestaurant>,
    },
    {
        id: 7,
        path: '/7-tabs-setup',
        image: './images/projetos/7-tabs-setup.png',
        element: <TabsSetup></TabsSetup>,
    },
    {
        id: 8,
        path: '/8-lorem-generator',
        image: './images/projetos/8-lorem-generator.png',
        element: <LoremGenerator></LoremGenerator>,
    },
    {
        id: 9,
        path: '/9-lista-tarefa-reducer',
        image: './images/projetos/9-lista-tarefa-reducer.png',
        element: <ListaTarefaReducer></ListaTarefaReducer>,
    },
    {
        id: 10,
        path: '/10-navbar',
        image: './images/projetos/10-navbar.png',
        element: <NavBar></NavBar>,
    },
    {
        id: 11,
        path: '/11-calculator',
        image: './images/projetos/11-calculator.png',
        element: <Calculator></Calculator>,
    },
];

export default routes;

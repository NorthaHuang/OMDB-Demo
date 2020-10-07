import Home from './components/Home';
import SearchResult from './components/SearchResult';
import ItemDetail from './components/ItemDetail';
import Error from './components/Error';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'SearchResult',
    path: '/result',
    component: SearchResult,
    exact: false,
  },
  {
    name: 'ItemDetail',
    path: '/detail/:id',
    component: ItemDetail,
    exact: false,
  },
  {
    name: 'Error',
    path: '/error',
    component: Error,
    exact: false,
  },
];

export default routes;

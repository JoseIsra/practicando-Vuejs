import Search from './components/Search.vue';
import About from './components/About.vue';
import CharacterDetails from './components/CharacterDetails.vue';

// todas las rutas en un routes
const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/detail/:id', component: CharacterDetails, name: 'details' },
];
export default routes;

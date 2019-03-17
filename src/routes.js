import Home from './components/Home.vue';
import List from './components/List.vue';
import Register from './components/Register.vue';

export const routes = [
	{ path : '', component: Home },
	{ path : '/list', component: List },
	{ path : '/register', component: Register },
]
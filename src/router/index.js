import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue';
import View404 from '../views/View404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },


    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },

  ]
})

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue';
import MentionslegalesView from '../views/MentionslegalesView.vue';
import HistoireView from '../views/HistoireView.vue';
import ReglementView from '../views/ReglementView.vue';
import View404 from '../views/View404.vue';

import CreateJeux from '../views/jeux/CreateView.vue';
import UpdateJeux from '../views/jeux/UpdateView.vue';
import DeleteJeux from '../views/jeux/DeleteView.vue';
import ListeJeux from '../views/jeux/ListeView.vue';

import ListeJoueurs from '../views/joueurs/ListeView.vue';
import CreateJoueurs from '../views/joueurs/CreateView.vue';
import UpdateJoueurs from '../views/joueurs/UpdateView.vue';
import DeleteJoueurs from '../views/joueurs/DeleteView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/histoire', name: 'HistoireView', component: HistoireView },
    { path: '/reglement', name: 'ReglementView', component: ReglementView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },


    { path: '/jeux', name: 'ListeJeux', component: ListeJeux },
    { path: '/createJeux', name: 'CreateJeux', component: CreateJeux },
    { path: '/updateJeux/:id', name: 'UpdateJeux', component: UpdateJeux },
    { path: '/deleteJeux/:id', name: 'Deletejeux', component: DeleteJeux },
 
    { path: '/inscription', name: 'ListeJoueurs', component: ListeJoueurs },
    { path: '/createjoueurs', name: 'CreateJoueurs', component: CreateJoueurs },
    { path: '/updatejoueurs/:id', name: 'UpdateJoueurs', component: UpdateJoueurs },
    { path: '/deletejoueurs/:id', name: 'DeleteJoueurs', component: DeleteJoueurs },


  ]
})

export default router;

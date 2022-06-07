import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue';
import MentionslegalesView from '../views/MentionslegalesView.vue';
import HistoireView from '../views/HistoireView.vue';
import ReglementView from '../views/ReglementView.vue';
import InscriptionView from '../views/InscriptionView.vue';
import View404 from '../views/View404.vue';

import CreateJeux from '../views/jeux/CreateView.vue';
import UpdateJeux from '../views/jeux/UpdateView.vue';
import DeleteJeux from '../views/jeux/DeleteView.vue';
import ListeJeux from '../views/jeux/ListeView.vue';
import Headline1 from "../components/Headline.vue";
import Headline2 from "../components/Headline2.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/histoire', name: 'HistoireView', component: HistoireView },
    { path: '/reglement', name: 'ReglementView', component: ReglementView },
    { path: '/inscription', name: 'InscriptionView', component: InscriptionView },

    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },


    { path: '/jeux', name: 'ListeJeux', component: ListeJeux },
    { path: '/createJeux', name: 'CreateJeux', component: CreateJeux },
    { path: '/updateJeux/:id', name: 'UpdateJeux', component: UpdateJeux },
    { path: '/deleteJeux/:id', name: 'Deletejeux', component: DeleteJeux },



  ]
})

export default router;

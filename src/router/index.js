import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ContactView from '../views/ContactView.vue';
import MentionslegalesView from '../views/MentionslegalesView.vue';
import HistoireView from '../views/HistoireView.vue';
import ReglementView from '../views/ReglementView.vue';
import InscriptionView from '../views/InscriptionView.vue';
import JeuxView from '../views/JeuxView.vue';
import View404 from '../views/View404.vue';

import CreateJeux from '../views/jeux/CreateJeux.vue';
import ModifierJeux from '../views/jeux/ModifierJeux.vue';
import DeleteJeux from '../views/jeux/DeleteJeux.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/histoire', name: 'HistoireView', component: HistoireView },
    { path: '/reglement', name: 'ReglementView', component: ReglementView },
    { path: '/inscription', name: 'InscriptionView', component: InscriptionView },
    { path: '/jeux', name: 'JeuxView', component: JeuxView },
    { path: '/:pathMatch(.*)*', name: 'View404', component: View404 },
   
    { path: '/ajouterjeux', name: 'CreateJeux', component: CreateJeux },
    { path: '/modifier/:id', name: 'ModifierJeux', component: ModifierJeux },
    { path: '/supprimer/:id', name: 'Deletejeux', component: DeleteJeux },


  ]
})

export default router;

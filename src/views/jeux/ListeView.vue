<template>
  <Header1 />
  <br>
  <br>
  <div class="relative mt-12 flex flex-col gap-20 px-5">
      <h1 class="font-museomoderno mt-10 border-b-2 text-center text-2xl">Liste des jeux sur lesquels l'arène organisera un tournoi</h1>
      <RouterLink to="/createJeux">
        <div class="rounded-2xl bg-blue-700 px-10 py-4 font-museomoderno text-white"><p>Ajouter un jeux</p></div>
      </RouterLink>
    <div class="block w-full">

      <table class="w-full">
        <thead>
          <tr class="border-b-2">
            <th class="font-rajdhani w-64 p-3">Image</th>
            <th class="font-rajdhani w-1/5">Nom</th>
            <th class="font-rajdhani mt-3 hidden w-1/5 sm:flex">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jeux in Listejeux" :key="jeux.id">
            <td class="text-center">
              <img class="media-object imageSmall m-auto h-60" :src="jeux.photo" :alt="jeux.nom + ' ' + jeux.description" />
            </td>
            <td>{{ jeux.nom }}</td>
            <td>{{ jeux.description }}</td>
            <td>
            <RouterLink :to="{ name:'UpdateJeux', params:{ id:jeux.id}}">
              <Modification />
              </RouterLink>
            <RouterLink :to="{ name:'Deletejeux', params:{ id:jeux.id}}">
              <Supprimer />
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Footer1 />
</template>

<script>
import Footer1 from "../../components/Footer.vue";
import Header1 from "../../components/Header.vue";
import Modification from "../../components/icones/Modification.vue";
import Supprimer from "../../components/icones/Supprimer.vue";
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  name: "ListeView",
  components: { Header1, Footer1, Modification, Supprimer },
  data() {
    return {
      Listejeux: [],
    };
  },
  mounted() {
    this.getJeux();
  },
  methods: {
    async getJeux() {
      // Obtenir Firestore
      const firestore = getFirestore();

      const dbJeux = collection(firestore, "jeux");

      const q = query(dbJeux, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.Listejeux = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.Listejeux.forEach(function (jeux) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "logojeux/" + jeux.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              jeux.photo = url;
            })

            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>
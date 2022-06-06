<template>
  <Header1 />
  <h1 class="font-lato mt-10 border-b-2 text-center text-2xl">Rejoignez les joueurs déja inscrit à l'arène en vous inscrivant :</h1>
  <div class="relative mt-12 flex flex-col gap-20 px-5">
      <RouterLink to="/createJoueurs">
        <div class="rounded-2xl bg-blue-700 px-10 py-4 font-museomoderno text-white"><p>S'inscrire à l'arène</p></div>
      </RouterLink>
    <div class="block w-full">

      <table class="w-full">
        <thead>
          <tr class="border-b-2">
            <th class="font-rajdhani w-64 p-3">Image</th>
            <th class="font-rajdhani w-1/5">Nom</th>
            <th class="font-rajdhani mt-3 hidden w-1/5 sm:flex">Adresse Mail</th>
            <th class="font-rajdhani left-0 sm:flex">Date de naissance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="joueurs in Listejoueurs" :key="joueurs.id">
            <td class="text-center">
              <img class="media-object imageSmall m-auto h-60" :src="joueurs.photo" :alt="joueurs.nom + ' ' + joueurs.mail + joueurs.naissance" />
            </td>
            <td>{{ joueurs.nom }}</td>
            <td>{{ joueurs.mail }}</td>
            <td>{{ joueurs.naissance }}</td>
            <td>
            <RouterLink :to="{ name:'UpdateJoueurs', params:{ id:joueurs.id}}">
              <Modification />
              </RouterLink>
            <RouterLink :to="{ name:'Deletejoueurs', params:{ id:joueurs.id}}">
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
      Listejoueurs: [],
    };
  },
  mounted() {
    this.getjoueurs();
  },
  methods: {
    async getjoueurs() {
      // Obtenir Firestore
      const firestore = getFirestore();

      const dbjoueurs = collection(firestore, "joueurs");

      const q = query(dbjoueurs, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.Listejoueurs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        this.Listejoueurs.forEach(function (joueurs) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "photojoueurs/" + joueurs.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              joueurs.photo = url;
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
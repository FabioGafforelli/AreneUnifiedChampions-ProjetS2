<template>
<Header1 />
    <h1 class="font-lato text-2xl text-center border-b-2 mt-10">Gérer l'artiste</h1>
  <div class="mt-12 px-5 flex flex-col gap-20 relative">
      <div class="flex justify-center">
        <RouterLink to="/ajouterjeux"> <div class=" bg-blue-700 text-white font-museomoderno px-10 py-4 rounded-2xl hover:bg-blue-900"><p>Ajouter un jeux</p></div> </RouterLink>
      </div>
      <div class="block overflow-x-auto w-full">
            <p class="font-lato text-xl font-medium text-center mb-5">Tapez pour rechercher le nom de l'artiste à modifier</p>
          <div class="flex flex-row justify-center gap-3">
              <input type="search" class="w-full rounded-xl h-10 text-black px-4 bg-violet-50 placeholder:text-violet-900 border-violet-900" placeholder="Recherche par nom" v-model="query">
          </div>

          <table class="w-full">
            <thead>
                <tr class="border-b-2">
                    <th class="w-64 p-3 font-lato ">Image</th>
                    <th class="w-1/5 font-lato ">Nom</th>
                    <th class="w-1/5 font-lato hidden sm:flex mt-3 ">Description</th>
                
                </tr>
            </thead>
            <tbody>
                <tr v-for="artistes in searchByName" :key="artistes.id" class="mt-2">
                    <td class=""><img :src="artistes.imageartiste" :alt="jeux.nom" class="w-full h-auto lg:w-1/2 lg:h-1/2  mb-10"></td>
                    <td class="text-center font-lato ">{{jeux.nom}}</td>
                    <td class="text-center font-lato hidden sm:flex lg:mt-12 sm:mt-[105px] ">{{jeux.description}}</td>

                    <td class="text-center lg:w-1/4">
                        

                        <RouterLink :to="{ name:'Supprimer', params: { id: jeux.id }}">
                         <div class=" p-7 bg-violet-700 text-white font-lato px-4 py-3 rounded-2xl mb-1 effet-shadowblanc hover:bg-violet-900 ">
                            Supprimer
                        </div>
                        </RouterLink>

                        <RouterLink :to="{ name:'Modifier', params: { id: jeux.id }}">
                            <div class="bg-violet-400 text-white font-lato px-4 py-3 rounded-2xl effet-shadowblanc hover:bg-violet-900">
                                Modifier
                            </div>
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
import {
    getFirestore,
    collection,
    doc,
    query,
    orderBy,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL,         // Permet de récupérer l'adress complète d'un fichier du Storage
    uploadString,           // Permet d'uploader sur le Cloud Storage une image en Base64
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
import Footer1 from '../components/Footer.vue';
import Header1 from '../components/Header.vue';



export default {
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listejeuxSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
                filter:''
            }
        },
        computed:{
            orderByName:function(){
                return this.listejeuxSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                })
            },
            filterByName:function(){
                if(this.filter.length > 0){
                    let filter = this.filter.toLowerCase();
                    return this.orderByName.filter(function(Artistes){
                        return jeux.nom.toLowerCase().includes(filter);
                    })
                }else{
                    return this.orderByName;
                }
            }
        },
        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getjeuxSynchro();
        },
        methods: {
              async getjeuxSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "jeux");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbjeux, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listejeuxSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
                    this.listejeuxSynchro.forEach(function(jeux){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'logojeux/'+jeux.logojeux);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        logojeux.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
                })
            },
            async createArtistes(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "jeux");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbjeux,{
                    nom: this.nom,
                    description: this.description,
                    logojeux: this.logojeux
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateArtistes(jeux){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "jeux", jeux.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    nom: jeux.Nom
                }) 
             },
            async deletejeux(jeux){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "jeux", jeux.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'logojeux/'+this.jeux.logojeux);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'jeux'), this.jeux);
            });
            this.$router.push('/jeux')
        },
},
    components: { Footer1, Header1 }
}
</script>
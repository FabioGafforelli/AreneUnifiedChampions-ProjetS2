<template>
    <h1 class="font-lato text-2xl text-center border-b-2 mb-10 mt-20">Suppression Artiste</h1>

        <div class="mt-2 px-5 flex flex-col gap-20 relative">
        <div class="">
            <p class="w-full text-center py-3 bg-red-500 text-white font-montserrat motion-safe:timepicker-clock-animation ">Êtes-vous sur de vouloir supprimer cet artiste  ?</p>
        </div>
        <form @submit.prevent="deleteArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black overflow-hidden rounded-2xl">
                        <div class="bg-violet-800 text-white px-5 border-[1px] flex justify-center items-center font-lato">Nom</div>
                        <input class="w-full  p-5 font-lato bg-white border-2"  placeholder="Nom de l'artiste" v-model="artistes.artiste" disabled>
                    </div>

                    <div class="flex h-12 text-black rounded-2xl overflow-hidden">
                        <p class="bg-violet-800 text-white leading-5 -mt-[9px] px-6 py-3 border-[1px] font-lato ">Chanson connue</p>
                        <input class="w-full  p-5  font-lato bg-white border-2"  placeholder="Chanson populaire" v-model="artistes.chansonconnue" disabled >
                    </div>


                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center mt-14">
                <button class="font-montserrat py-2 px-5 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 mb-20" type="button"><RouterLink to="/gestionartiste">Annuler</RouterLink></button>
                <button class="font-montserrat py-2 px-5 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 mb-20" type="submit">Supprimer</button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore,
    doc, 
    getDoc,
    deleteDoc
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
export default {
    data(){
        return{
                
            artistes:{   
                artiste:null,   
                imageartiste:null, 
            },

            refArtiste:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.artistes = this.refArtiste.data();
              this.photoActuelle = this.artistes.imageartiste;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'imageartiste/'+this.artistes.imageartiste);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async deleteArtiste(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'imageartiste/'+this.artistes.imageartiste);
            deleteObject(docRef);
            this.$router.push('/artistes');       
        }
    }

}
</script>

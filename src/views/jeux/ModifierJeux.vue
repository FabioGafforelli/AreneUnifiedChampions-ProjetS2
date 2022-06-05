<template>
    <h1 class="font-lato text-2xl text-center border-b-2 mb-20">Modifier artiste</h1>

     <div class="mt-12 px-5 flex flex-col gap-20 relative mb-20">
        <form @submit.prevent="updateArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black overflow-hidden rounded-2xl">
                        <div class="bg-violet-400 px-5 border-[1px] flex justify-center items-center font-lato">Nom</div>
                        <input class="w-full  p-5 font-lato bg-white border-2" type="text" placeholder="Nom de l'artiste" v-model="artistes.artiste" required>
                    </div>

                    <div class="flex h-12 text-black rounded-2xl overflow-hidden">
                        <p class="bg-violet-400 leading-5 -mt-2 px-6 py-3 border-[1px] font-lato ">Chanson connue</p>
                        <input class="w-full  p-5  font-lato bg-white border-2" type="text" placeholder="Chanson populaire" v-model="artistes.chansonconnue" required>
                    </div>

                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-violet-400 px-5 border-[1px] flex justify-center items-center font-lato ">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative  p-5 font-lato bg-white border-2" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 -top-0 bottom-0 flex justify-center items-center bg-violet-300 font-lato hover:bg-violet-800 hover:text-white" for="file">Sélectionner l'image</label>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="grid grid-cols-2 w-full place-items-center mt-14">
                <button class="font-montserrat py-2 px-5 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 mb-20" type="button"><RouterLink to="/gestionartiste">Annuler</RouterLink></button>
                <button class="font-montserrat py-2 px-5 bg-[#0369A1] rounded-2xl text-white hover:bg-violet-800  hover:-translate-y-0.5 mb-20" type="submit">Modifier</button>
            </div>
        </form>
    </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
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
            imageData:null, 
               
            artistes:{   
                artiste:null,  
                imageartiste:null, 
            },

            refArtiste:null,     
            imgModifiee:false,       
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.artistes.imageartiste = this.file.name;
          this.imgModifiee = true;
          var input = event.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
      },

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
                this.imageData = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async updateArtiste(){
          if(this.imgModifiee){
              const storage = getStorage();
              let docRef = ref(storage, 'imageartiste/'+this.photoActuelle);
              deleteObject(docRef);
              docRef = ref(storage, 'imageartiste/'+this.artistes.imageartiste);
              await uploadString(docRef, this.imageData, 'data_url').then((snapshot) =>{
                  console.log('Uploaded a base64 string', this.artistes.imageartiste);
              });
          }
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artistes);
          this.$router.push('/gestionartiste');
      }
    }

}
</script>

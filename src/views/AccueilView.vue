<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import SectionJoueur from "../components/icones/SectionJoueur.vue"
import Headline1 from "../components/Headline.vue"
import Bouton1 from "../components/bouton.vue"
import Headline2 from "../components/Headline2.vue"
import Bouton2 from "../components/bouton2.vue"
import Headline3 from "../components/Headline3.vue"
import Bouton3 from "../components/bouton3.vue"



export default {
    name:"App",
    components: { header1, footer1, SectionJoueur, Headline1, Bouton1, Headline2, Bouton2, Headline3, Bouton3 },
}
</script>

<template>
<main class="">
        <header1/>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
<div>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
<div>
    <a href="#heading1">
    <img src="/public/images/boutonjoueur.png" alt="Scroller jusqu'à la page description joueur en cliquant sur cette image">
    </a>
</div>
<div>
    <a href="#heading2">
    <img src="/public/images/boutonteam.png" alt="Scroller jusqu'à la page description equipe en cliquant sur cette image">
    </a>
</div>
<div>
    <a href="#heading3">
    <img src="/public/images/boutontournoi.png" alt="Scroller jusqu'à la page tournoi en cliquant sur cette image">
    </a>
</div>
                </div>
<headline-1></headline-1>

       <RouterLink to="/inscription"><bouton-1></bouton-1></RouterLink>
<br>

</div>
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
    <div class="bg-gray-100 rounded-xl ml-10"> 
        <div><h2 class="ml-4 mt-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-700">3 étapes</h2></div>
        <br>
        <ul class="list-disc">
            <span class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-orange-600">1.</span>
             <p class="font-rajdhani font-bold text-black text-2xl">Créer</p>
             <p class="ml-3 text-2xl ">votre profil</p>
             </ul>
        <br>
        <div class=""><p class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-orange-600">2.</p> <p class="font-rajdhani font-bold text-black text-2xl">Rechercher</p><p class="ml-3 text-2xl">une équipe dans notre 
base de données en fonction de vos envies</p></div>
        <br>
        <div class=""><p class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-orange-600">3.</p> <p class="font-rajdhani font-bold text-black text-2xl"> Intégrer</p><p class="ml-3 text-2xl">votre nouvelle équipe et GAGNEZ !</p></div>
        </div>
</div>

<img class="w-full" src="/public/images/Vector21.png" alt="">

<headline2></headline2>
<RouterLink to="/inscription"><bouton2></bouton2></RouterLink>

<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
    <div class="bg-gray-200 rounded-xl ml-2"> 
        <div><h2 class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-800">3 étapes</h2></div>
        <br>
        <div class=""><p class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-blue-600">1.</p> <p class="font-rajdhani font-bold text-black text-2xl">Créer</p><p class="ml-3 text-2xl">votre équipe.</p></div>
        <br>
        <div class=""><p class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-purple-600">2.</p> <p class="font-rajdhani font-bold text-black text-2xl">Rechercher</p><p class="ml-3 text-2xl">des joueurs dans notre
 base de données en fonction de vos envies</p></div>
        <br>
        <div class=""><p class="flex pl-5 pt-5 pb-10 sm:text-base lg:text-xl xl:text-2xl font-museomoderno font-bold text-pink-600">3.</p> <p class="font-rajdhani font-bold text-black text-2xl"> Recrutez</p><p class="ml-3 text-2xl">des nouveaux joueurs et GAGNEZ !</p></div>
        </div>
</div>
<br>

<headline3 />

<footer1 />
</main>
</template>
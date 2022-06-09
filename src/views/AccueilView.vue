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
<main class="absolute w-full">
    <div>
        <header1/>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 m-40 ">
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
</div>

       

<div class="grid grid-cols-3 z-10 mt-20 mb-20 md:flex md:flex-row md:justify-between md:items-center gap-3">
    <div class="bg-gray-100 rounded-xl ml-10"> 
        <div><h2 class="ml-4 mt-4 text-4xl font-rajdhani font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-700">3 étapes</h2></div>
        <br>
            <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-yellow-600">1. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Créer votre profil</span></p>
             
        <br>
        <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-orange-600">2. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Rechercher une équipe dans notre base de données </span></p>
        <br>
                <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-red-600">3. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Intégrer votre nouvelle équipe et GAGNEZ ! </span></p>

        </div>
        <bouton-1></bouton-1>
</div>

<img class="w-full" src="/public/images/Vector21.png" alt="séparateur visuel">

<headline2></headline2>


<div class="grid grid-cols-3 z-10 mt-20 mb-20 md:flex md:flex-row md:justify-between md:items-center gap-3">
    <div class="  bg-gray-100 rounded-xl ml-10"> 
        <div><h2 class=" mt-4 ml-4 text-4xl font-rajdhani font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-800">3 étapes</h2></div>
        <br>
                        <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-blue-600">1. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Créer votre équipe </span></p>

        <br>
                        <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-purple-600">2. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Rechercher des joueurs dans notre base de données </span></p>
        <br>
                        <p class="ml-4 mt-4 text-2xl font-museomoderno font-bold text-pink-600">3. <span class="font-rajdhani font-bold text-2xl text-gray-800 ">Recrutez des nouveaux joueurs et GAGNEZ ! </span></p>

        </div>
        <bouton2></bouton2>

</div>
<img class="w-full" src="/public/images/Vector21.png" alt="séparateur visuel">
<br>
<headline3></headline3>
<footer1 />
</main>
</template>
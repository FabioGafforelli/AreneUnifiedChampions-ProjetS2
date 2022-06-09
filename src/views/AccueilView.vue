<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import SectionJoueur from "../components/icones/SectionJoueur.vue"
import Headline1 from "../components/Headline.vue"
import Bouton1 from "../components/bouton.vue"
import Headline2 from "../components/Headline2.vue";
import Bouton2 from "../components/bouton2.vue"
export default {
    name:"App",
    components: { header1, footer1, SectionJoueur,Headline1,Bouton1,Headline2,Bouton2 },
}
</script>

<template>
<main class="w-full">
    <div>
        <header1/>
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 m-40 ">
<div>
    <img src="/public/images/boutonjoueur.png" alt="Scroller jusqu'à la page description joueur en cliquant sur cette image">
</div>
<div>
    <img src="/public/images/boutonteam.png" alt="Scroller jusqu'à la page description equipe en cliquant sur cette image">
</div>
<div>
    <img src="/public/images/boutontournoi.png" alt="Scroller jusqu'à la page tournoi en cliquant sur cette image">
</div>
</div>
<headline-1></headline-1>

       
<br>

</div>
<div class="grid grid-cols-3 z-10 mt-40 md:flex md:flex-row md:justify-between md:items-center gap-3">
    <div class="bg-gray-100 rounded-xl ml-10"> 
        <div><h2 class="ml-4 mt-4 text-5xl font-bold font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">3 étapes  </h2></div>
            <p class="ml-4 mt-8 text-2xl font-bold font-rajdhani text-yellow-500">1.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Créer</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">votre profil</span>
        </p>
            <p class="ml-4 mt-6 text-2xl font-bold font-rajdhani text-orange-600">2.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Rechercher</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">une équipe dans notre base de données</span>
        </p>   
                <p class="ml-4 mt-6 text-2xl font-bold font-rajdhani text-red-600">3.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Intégrer</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">votre nouvelle équipe et GAGNEZ !</span>
        </p>
        </div>
        <bouton-1></bouton-1>
</div>

<img class="w-full" src="/public/images/Vector 21.png" alt="Séparateur visuel">

<headline2></headline2>


<div class="grid grid-cols-3 z-10 mt-40 md:flex md:flex-row md:justify-between md:items-center gap-3">
    
    
    <div class="bg-gray-100 rounded-xl ml-10"> 
        <div><h2 class="ml-4 mt-4 text-5xl font-bold font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800">3 étapes </h2></div>
            <p class="ml-4 mt-8 text-2xl font-bold font-rajdhani text-blue-500">1.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Créer</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">votre équipe.</span>
        </p>
            <p class="ml-4 mt-6 text-2xl font-bold font-rajdhani text-purple-600">2.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Rechercher</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">des joueurs dans notre base de données </span>
        </p>   
                <p class="ml-4 mt-6 text-2xl font-bold font-rajdhani text-pink-600">3.<span class="font-rajdhani font-bold text-2xl text-gray-800 ml-2">Recrutez</span>
             <span class="ml-1 font-rajdhani font-bold text-2xl text-gray-600 mr-4">des nouveaux joueurs et GAGNEZ !</span>
        </p>
        </div>

        <bouton2></bouton2>
</div>


<br>
<div class="flex grid-cols-3">
        <img class="w-12 h-12" src="/public/images/Sectiontournois.png" alt="">
     <div class=""> <h1 class="text-black text-5xl px-4 font-rajdhani">Annonces</h1><h1 class="text-green-600 text-5xl font-rajdhani"> Tournois </h1>
       <p class="text-black text-2xl font-rajdhani font-light">Retrouvez le tournoi esport League of Legend afin de départager les 
meilleures équipes universitaires de  Bourgogne Franche-Comté qui 
participera à la grosse ligue.</p>
       <br>
<br>
       <p class="text-black text-2xl font-rajdhani font-normal">Vous retouverez ici l’agenda des match du tournoi ainsi que les rediffusion 
des matchs.</p></div>
</div>
<div class="grid grid-cols-1">
    <br>
<div><h1 class="font-bold font-rajdhani flex pl-5 pt-5 pb-10 sm:text-2xl lg:text-2xl xl:text-3xl">Calendrier des matchs</h1></div>
</div>
<div class="grid grid-cols-2">
    <div class="flex mr-auto my-auto"><img class="w-24 h-24" src="/public/images/CalendrierMatch.png" alt="">
    <h2 class="flex pl-5 pt-5 pb-10 sm:text-2xl lg:text-2xl xl:text-3xl font-rajdhani">Matchs du jour</h2>
    </div>
    <div>
       <div class="flex"><img class="w-24 h-24" src="/public/images/Calendrier.png" alt="">
            <h2 class="flex pl-5 pt-5 pb-10 sm:text-2xl lg:text-2xl xl:text-3xl font-rajdhani">Matchs à venir</h2>
    </div>
    </div>
</div>
<br>
<div class="grid grid-cols-2 bg-gradient-to-bl from-lime-300 to-blue-700">
<div><img src="/public/images/Card_matchs1.png" alt="Affiche d'un match à venir du tournoi de qualification le 10 juin 2022 à 19h"></div>
<div>
    <img src="/public/images/Card_matchs2.png" alt="Affiche d'un match à venir du tournoi de qualification le 17 juin 2022 à 18 heures 30">
    <img src="/public/images/Cars_matchs3.png" alt="Affiche d'un match à venir du tournoi de qualification le 24 juin 2022 à 17 heures 30">
</div>
</div>



<footer1 />
</main>
</template>
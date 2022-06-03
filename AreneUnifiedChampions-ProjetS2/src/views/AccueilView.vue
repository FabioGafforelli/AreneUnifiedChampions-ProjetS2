<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import SectionJoueur from "../components/icones/SectionJoueur.vue"
export default {
    name:"App",
    components: { header1, footer1, SectionJoueur },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
                <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
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
                
<section class="flex grid-cols-3">
        <SectionJoueur />
       <h1 class="text-black text-5xl px-4 font-rajdhani">Vous êtes un</h1><h1 class="text-orange-400 text-5xl font-rajdhani"> Joueur ? </h1>

</section>
       <p class="text-black text-3xl font-rajdhani font-bold bottom-5">Vous êtes un joueur, mais vous n’avez pas d’équipe pour la Grosse ligue ?</p>
       <p class="text-black text-2xl font-rajdhani font-light">Pas de soucis, vous pouvez postuler en créant votre profil pour rejoindre une équipe.</p>
       <br>
       <p class="text-black text-2xl font-rajdhani font-light">Dans ce profil vous pouvez renseignez toute votre expérience sur le jeu “League of Legend”
(votre rang, votre rôle...).</p>
<br>
       <p class="text-black text-2xl font-rajdhani font-normal">Vous pouvez vous rendre dans la base de donées mise à votre dispotition, Afin de trouver l’équipe qui vous correspond.</p>
<div class="grid grid-cols-2">
    <button><img src="/public/images/BoutonProfil.png" alt=""></button>
    <button><img src="/public/images/Boutonchercherequipe.png" alt=""></button>
</div>

</div>
<footer1 />
</template>
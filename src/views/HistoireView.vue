<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Bouton1 from "../components/bouton.vue"
import bouton2 from "../components/bouton2.vue"
export default {
    name:"App",
    components: { header1, footer1, Bouton1, bouton2 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
        <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="bg-indigo-25">
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
        <div>
            <h1 class="text-5xl text-blue-600">Naissance du projet</h1>
            <br>
<p class="font-museomoderno flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl">

Qui a dit que l’université de Franche-Comté n’était pas moderne et sur les devants de la scène esportive ? 


Venez soutenir Unified Champions, et soyez les premiers à rejoindre l’association qui vous permettra d’allier passion et études ! Imaginez ce que nous pourrons faire ensemble…


Unified Champions Club accueille tous les étudiants de l’université de Franche-Comté intéressés de près ou de loin par le gaming. Que vous deveniez joueur, staff technique, staff médical, commentateur ou plus important encore : supporters, vous êtes tous les bienvenus à l’U2C.


Notre université est pionnière dans le soutien de son équipe. Les meilleurs joueurs d’Unified Champions Club feront partie de l’équipe qui représentera les couleurs de notre université lors des événements nationaux comme la Grosse Ligue en octobre par exemple. </p>
        <br>
        <p class="font-museomoderno flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl">Unified Champions Club a pour objectif cette année de rejoindre le circuit League of Legends. Comment ? En rejoignant la Grosse Ligue, une compétition ouverte inter-universitaire.


En attendant cette échéance en octobre, U2C organise en juin un tournoi de détection : l’Arène, pour permettre aux étudiants de l’université de s’affronter entre eux. Pas de niveau exigé, pas de niveau attendu, tout le monde est le bienvenu. Même unranked, tu seras bien accueilli. 

L’objectif d’U2C et de l’Arène, c’est de s’améliorer, de partager, de jouer. Vous aurez l’occasion de rencontrer des coachs, des préparateurs physiques. Venez essayer de battre les autres équipes ! Pour vous inscrire, rendez-vous sur : https://unifiedchampions.fr


Et si tu ne te sens toujours pas de participer, deviens notre fan numéro 1. Suivez votre équipe favorite et encouragez la via discord (d’ailleurs, rejoignez-nous vite : https://discord.gg/9vKfPu62dT), via le réseau des supporters, et en suivant les streams et live twitch. 


Levez haut les couleurs de l’équipe et de l’université en nous soutenant sur les réseaux.

     

Merci à tous pour votre soutien, 


Et à bientôt la #TeamU2C,</p>
        </div>
                </div>
        <RouterLink to="/inscription"><Bouton1 />></RouterLink> 
            


</div>
<footer1 />
</template>
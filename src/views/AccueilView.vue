<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Doughnut from "../components/Graphique_Doughnut.vue"
import Radar from "../components/Radar.vue"
import Bar from "../components/Bar.vue"
import Line from "../components/Line.vue"




export default {
    name:"App",
    components: { header1, footer1, Doughnut, Radar, Bar, Line },
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
<div>
    
    <h1 class="font-bold text-2xl">Bourgogne ou Franche-Comté, une rivalité même dans le cyclisme ?</h1>

    <p class="text-2xl">Depuis 2014, la Bourgogne et la Franche-Comté ne font plus qu’une, sous l’acronyme de “Bourgogne-Franche-Comté” elles partagent désormais le même destin mais aussi, les mêmes problèmes.</p>
<p class="text-2xl">Cependant, même avec cette fusion, des différences se font tout de même ressentir, notamment dans le monde cycliste.</p>
<div>
<p class="text-2xl">Le <a href="https://www.bourgognefranchecomte.fr/velo-aussi-la-region-accelere"> “plan d’accélération de l’investissement régional” (lien cliquable vers la source)</a>, a fixé le budget alloué pour le développement des infrastructures cyclables dans la région.</p>
<p class="text-2xl">Ce dernier prévoit notamment pas moins de 4,6M d’€ pour le développement des infrastructures territoriales pour leur permettre de garantir la sécurité des vélos et de leur abondance dans les prochaines années.</p>
<p class="text-2xl"><a href="https://france3-regions.francetvinfo.fr/bourgogne-franche-comte/cote-d-or/dijon/dijon-1-million-euros-accompagner-pratique-du-velo-metropole-quoi-vont-ils-servir-1830042.html">Parmi cette somme (lien cliquable vers la source)</a>, 1M d’€ est dédié uniquement à la ville de Dijon afin qu’elle puisse rattraper son retard en matière d'infrastructures cyclables.</p>
<p class="text-2xl">Afin de pouvoir constater pleinement l’ampleur de ce plan, voici un graphique illustrant la situation accidentogène des cyclistes dans la région “Bourgogne-Franche-Comté” :</p>
</div>

                </div>
<Radar class="graphique1" />
<br>

</div>
<div>
    
    <h1 class="font-bold text-2xl">La Franche-Comté, la grande gagnante ? </h1>
</div>

<div>
    <h1 class="font-bold text-xl">Comtois rend toi, nenni ma foi</h1>
    <p class="text-2xl">Grâce à ce graphique, nous pouvons constater que les départements franc-comtois sont moins sujets à des accidents vis-à-vis des cyclistes que ceux de la Bourgogne, comment cela ce fait-t-il ?</p>
    <p class="text-2xl">Tout cela se résume à une meilleure anticipation des communes et de leurs agglomérations à propos du phénomène d'agrandissement du nombre de cyclistes suite à une urbanisation toujours plus importante ces dernières années.</p>
    <p class="text-2xl">Le vélo est en effet plus simple à utiliser et plus rapide pour les trajets en milieu urbain (notamment pour les trajets quotidiens, dénommé “Vélotaf”),<a href="https://velotafnfc.fabiogafforelli.fr/">retrouvez le site de notre partenaire VélotafNFC en cliquant ici</a>, tout cela en réduisant aussi les émissions de CO2 émises dans les villes, cause principale du développement de ces infrastructures partout en France désormais.</p>
    <p class="text-2xl">Même si les instances franc-comtoises ont permis à un développement plus accru et poussé que ses homologues bourguignons, intéressons nous désormais de plus près à la gravité de ses accidents afin de savoir si cet argument est bel et bien justifié :</p>
</div>
<h2 class="font-bold text-xl">Voici deux graphiques présentant le nombre d'accidents en fonction de leur gravité dans le Doubs de 2013 à 2018</h2>
<div class="flex items-stretch">
<div class="py-4"><Doughnut /></div>
<Line class="graphique1" />
</div>
<p class="text-2xl"> Le premier graphique, sous forme de "camembert" représente le nombre d'accidents en fonction de la gravité sur les 5 années, tandis que le graphique en ligne représente la même donnée mais par année </p>
<br>
<div>
<p class="text-2xl"> Regardons plus en détail les équipements portés par les cyclistes lors de ces accidents comparé à l'état dans lequel les victimes se trouvent :</p>
</div>
<div>
    <Bar class="graphique2" />
</div>
<h2 class="font-bold text-xl text-left pl-5 my-8">Le doubs, une progression dans l'avenir ?</h2>
<p class="text-2xl">Le département du Doubs est le département franc comtois le plus sujet aux accidents de vélo, cela s'explique par le plan de modernisation des infrastructures incitant les usagers à se déplacer plus souvent à vélo.</p>
<p class="text-2xl">Le doubs à malgré tout des progrès à faire pour réduire le taux d'accidents et promouvoir encore plus le port d'équipement comme le casque.</p>
<p class="text-2xl">Le Doubs devrait pouvoir réaliser de nombreux progrès en matière de sécurité cycliste grâce à son plan de développement des infrastructures cyclables...</p>
<br>
<p class="font-light text-sm">De notre envoyé spécial, Fabio Gafforelli, ©LBM BFC TV</p>
<footer1 />
</main>
</template>

<style scoped>
    .graphique1 {
        width: 40%;
    }
    .graphique2 {
        width: 30%;
    }
</style>
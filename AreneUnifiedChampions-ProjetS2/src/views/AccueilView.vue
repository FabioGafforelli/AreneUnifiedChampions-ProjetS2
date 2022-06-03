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
                
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
<section>
    <div class="grid grid-cols-2">
        <SectionJoueur />
    </div>
</section>

</div>
</div>
<footer1 />
</template>
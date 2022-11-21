<script setup>
    import { reactive, ref, onMounted } from 'vue';
// import d'un graphique type doughnut
    import { Doughnut } from 'vue-chartjs'
    import { aleatoire, densite } from '@/composables/commonChart.js'

    import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale} from 'chart.js'

    //elements utilisés potentiellement pour notre graphique
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

    const propChart = defineProps ({
        chartID: { type: String, default: 'doughnut-chart'},
        datasetIdKey: { type: String, default: 'label'},
        width: { type: Number, default: 50},
        height: { type: Number, default: 50},
        cssClasses: { type: String, default: ""},
        styles: { type: Object, default: () => {}},
        plugins: { type: Object, default: () => {}},
    })

    const chartData = reactive({
        //labels vide
        labels:[],
        datasets: [
            {
                data: [],
                backgroundColor: ['green','yellow','orange','red'],
                borderColor: [],
                borderWidth:1
            }
        ]
    })
    //options du graphe
    const chartOptions = reactive ({
        responsive: true,
        maintainAspectratio: false
    })

    //Utilisation d'une ref pour la requête Ajax
    // null au départ (important)
    let liste = ref(null);
    //liste des spécialités
    let lstSpecialite = [];
    // tablea nb de villageois par spécialité
    let lstNb = [];
    // Au montage du composant
    onMounted(async() => {
        await fetch( 'https://fabiogafforelli.fr/accidentsdoubs.json')
        // réponse demandée en json
        .then(response => response.json())
        // récupération de la réponse
        .then(response => {
            liste = response;
            // on verifie dans la console l'obtention des résultats
            console.log("response", liste);

            //parcours de la liste des villageois
            //pour placer les spécialités dans un set
            // Permet d'éliminer les doublons
            let setSp = new Set();
            liste.forEach( (vil) => {
                setSp.add(vil.gravite_accident )
            })
            console.log("setSp :", setSp);

            chartData.labels=Array.from(setSp); 
            //Tri du tableau par ordre alphabètique
            chartData.labels.sort();
            // calcul du nombre de villageois par spécialité
            let cpt = [];
            //parcours des spécialités
            chartData.labels.forEach(function(spe){
                //Initialisation du nombre pour le spécialité en cours
                let nb = 0
                // Parcours de la liste des villageois
                liste.forEach( (vil) => {
                    // Si c'est la bonne spécialité
                    // oon compte + 1
                    if(spe == vil.gravite_accident){
                        nb++
                    }
                })
                // on place le nb de villageois de cette spécialité
                // dans le tableau de comptage
                cpt.push(nb);
            })
            // On transfert le tableau de comptage dans les data
            chartData.datasets[0].data = cpt;

        })
        .catch(error => console.log('erreur Ajax'))
    })

</script>

<template>
		<main id="heading1" class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
    <div class="container">
        <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartID"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
        />
    </div>
		</main>
</template>
<script setup>
    import { reactive, ref, onMounted } from 'vue';
// import d'un graphique type ligne
import { Line } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler} from 'chart.js'

//elements utilisés potentiellement pour notre graphique
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler)

const propChart = defineProps ({
    chartID: { type: String, default: 'line-chart'},
    datasetIdKey: { type: String, default: 'label'},
    width: { type: Number, default: 200},
    height: { type: Number, default: 100},
    cssClasses: { type: String, default: ""},
    styles: { type: Object, default: () => {}},
    plugins: { type: Object, default: () => {}},
})

  //Montage du composant Chargement des données
//Liste contiendra le résultat de la requête

let chartData = reactive({
// Etiquettes l'axe
labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
//Valeurs des données du graphique
datasets: [
    {
        //Etiquette du jeu de données
        label : 'Indemne',
        // Valeurs des données (statiques pour l'exemple)
        data: [0, 3, 3, 3, 0,0],
        borderColor: 'green',
        tension: 0.5,
        fill:true
    },
    {
        //Etiquette du jeu de données
        label : 'Blessé Léger',
        // Valeurs des données (statiques pour l'exemple)
        data: [13, 26, 20, 9, 8,6],
        borderColor: 'yellow',
        tension: 0.5,
        fill:true,
    },
    {
        //Etiquette du jeu de données
        label : 'Blessé Hospitalisé',
        // Valeurs des données (statiques pour l'exemple)
        data: [10, 15, 19, 10, 11, 13],
        borderColor: 'orange',
        tension: 0.5,
        fill:true,
    },
    {
        //Etiquette du jeu de données
        label : 'Tué',
        // Valeurs des données (statiques pour l'exemple)
        data: [2, 2, 1, 1, 1, 1],
        borderColor: 'red',
        tension: 0.5,
        fill:true,
    },

]
});
//Options du graphique
let chartOptions = reactive({
//Aspect responsive du graphique
responsive: true,
//les plugins
plugins:{
    //titre du graphique
    title:{
        //affichage
        display:true,
        //Libellé du graphique
        text: 'Doubs accidents / gravité de 2013 à 2018 :',
        // police du texte
        font:{
            size:16
        }
    }
}
});
</script>

<template>
<Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    />
</template>
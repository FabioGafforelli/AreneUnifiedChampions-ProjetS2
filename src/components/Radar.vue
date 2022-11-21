<script setup>
    import { reactive, ref, onMounted } from 'vue';

    // Import d'un graphique type radar
    import { Radar } from 'vue-chartjs'

    // Import des objets du graphique de la bibliothèque Chart Js
    import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, RadialLinearScale, Filler } from 'chart.js'

    // Eléments utilisés par notre graphique registration pour Vue-chart
    ChartJS.register(Title, Tooltip, Legend, PointElement,LineElement, RadialLinearScale, Filler)

    const propChart = defineProps ({
        chartID: { type: String, default: 'radar-chart'},
        datasetIdKey: { type: String, default: 'label'},
        width: { type: Number, default: 10},
        height: { type: Number, default: 10},
        cssClasses: { type: String, default: ""},
        styles: { type: Object, default: () => {}},
        plugins: { type: Object, default: () => {}},
    })
        // Données injectées dans le graphique
        let chartData = reactive({
    // Etiquettes l'axe
    labels: ['Doubs / Côte dOr', 'Jura / Nièvre', 'Haute Saône / Saône et Loire', 'Yonne / Belfort'],
    //Valeurs des données du graphique
    datasets: [
        {
            //Etiquette du jeu de données
            label : 'Bourgogne',
            // Valeurs des données (statiques pour l'exemple)
            data: [459, 240, 267, 180],
            borderColor: 'rgba(255, 0, 0, 0.5)',
            fill:true
        },
        {
            //Etiquette du jeu de données
            label : 'Franche-Comté',
            // Valeurs des données (statiques pour l'exemple)
            data: [448, 111, 133, 264],
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill:true,
        },  
    ]
    });
    
      //Options du graphique
   let chartOptions = reactive({
    //Aspect responsive du graphique
    responsive: true,
    // Echelles
    scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
        },
    },
    //les plugins
    plugins:{
        //titre du graphique
        title:{
            //affichage
            display:true,
            //Libellé du graphique
            text: 'accidents vélos :',
            // police du texte
            font:{
                size:16
            }
        }
    }
   });
   let liste = ref();
    // Liste des thèmes de visualisation
    let theme = [
        { id : 1 , lib : 'par mois'},
        { id : 2 , lib : 'par année'},
        { id : 3 , lib : 'par âge'},
    ]
    // Thème sélectionné
    let themeSelect = ref()
    themeSelect.value = 1


    // Total des valeurs calculées
    let total = ref()
    total.value = 0
 

  
</script>

<template>
    <div class="container-fluid">
            <Radar
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
        </div>
</template>
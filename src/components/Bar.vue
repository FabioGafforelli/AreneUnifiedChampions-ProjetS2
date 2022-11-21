<script setup>
    import { reactive } from 'vue';

    // Import d'un graphique type barChart
    import { Bar } from 'vue-chartjs'

    // Import des objets du graphique de la bibliothèque ChartJs
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    // Eléments utilisés par notre graphique
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


    // Propriétés du graphique Utilisés dans le template (props)
    // On définit pour chacune son type de données et sa valeur par défaut
    // On peut utiliser une grande variété de types, voire des objets
    const propChart = defineProps({
        chartId:            { type: String,         default: 'bar-chart'      }, // Id du graphique
        datasetIdKey:       { type: String,         default: 'label'          }, // Id du dataSet
        width:              { type: Number,         default: 10              }, // Hauteur du graphe
        height:             { type: Number,         default: 10              }, // Largeur du graphe
        cssClasses:         { type: String,         default: ''               }, // Classes css utilisées
        styles:             { type: Object,         default: () => {}         }, // Styles utilisés
        plugins:            { type: Object,         default: () => {}         }  // plugins utilisés
    })

    // Données injectées dans le graphique
    let chartData = reactive({
        // Etiquette de l'axe
        labels: ['Casque', 'Equipement réflechissant', 'Autres', 'Pas dindication'],
        // Valeurs des données du graphique
        datasets:[
            {
            // Etiquette du je de données à projeter
            label : 'indemne',
            // Valeurs des données
            data: [ 14, 2, 7, 1],
            // Couleur des barres en regard des valeurs
            backgroundColor:[
                'rgba(59, 153, 11, 0.5)',
                'rgba(59, 153, 11, 0.5)',
                'rgba(59, 153, 11, 0.5)',
                'rgba(59, 153, 11, 0.5)',
            ],
            // Couleur de la bordure de chaque barre
            borderColor:[
            'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
            ],
            borderWidth: 1            
        },
            {
            // Etiquette du je de données à projeter
            label : 'blessé léger',
            // Valeurs des données
            data: [ 101, 25, 79, 9 ],
            // Couleur des barres en regard des valeurs
            backgroundColor:[
                'rgba(235, 193, 6, 0.5)',
                'rgba(235, 193, 6, 0.5)',
                'rgba(235, 193, 6, 0.5)',
                'rgba(235, 193, 6, 0.5)',
                'rgba(235, 193, 6, 0.5)',
            ],
            // Couleur de la bordure de chaque barre
            borderColor:[
            'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
            ],
            borderWidth: 1            
        },
            {
            // Etiquette du je de données à projeter
            label : 'blessé hospitalisé',
            // Valeurs des données
            data: [ 112, 15, 44, 17 ],
            // Couleur des barres en regard des valeurs
            backgroundColor:[
                'rgba(255, 127, 0, 0.5)',
                'rgba(255, 127, 0, 0.5)',
                'rgba(255, 127, 0, 0.5)',
                'rgba(255, 127, 0, 0.5)',
                'rgba(255, 127, 0, 0.5)',
            ],
            // Couleur de la bordure de chaque barre
            borderColor:[
            'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
            ],
            borderWidth: 1            
        },
            {
            // Etiquette du je de données à projeter
            label : 'Tué',
            // Valeurs des données
            data: [ 12, 0, 3, 0],
            // Couleur des barres en regard des valeurs
            backgroundColor:[
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
            ],
            // Couleur de la bordure de chaque barre
            borderColor:[
            'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
            ],
            borderWidth: 1            
        }
    ]
    })

    // Options du graphique
    // Les principales utilisées, ils en existe d'autres
    // voir documentation
    let chartOptions = reactive({
      // Aspect responsive du graphique
      responsive: true,
      // Maintien du ratio
      maintainAspectRation:false,
      
      // Type de projection utilisée
      // x : verticale
      // y : horizontale
      indexAxis: 'x',

      // Echelles du graphique
        scales:{
            // axe des ordonnées
            y:{
                // Valeur max des y
                suggestedMax: 100,
                ticks:{
                    // Police
                    font:{
                        size:16
                    }
                }
            },
            // axe des abscisses
            x:{
                ticks:{
                    // Police
                    font:{
                        size:16
                    }
                }
            },
        },

        // Les plugins
        plugins:{
            // Légende des données
            legend:{
                // label des données
                labels:{
                    color:'green',
                    font:{
                        size:16
                    }
                }
            },
            title:{
                // Affichage du titre
                display:true,
                // Libellé du graphique
                text:"Gravité / Equipement 2013 à 2018 dans le Doubs",
                // Couleur du texte
                color:'red',
                // Police du texte
                font:{
                    size:30
                }   
            }
        }

    })


</script>

<template>
    
    <Bar
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

<style scoped>

</style>
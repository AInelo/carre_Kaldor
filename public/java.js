
// document.addEventListener("DOMContentLoaded", function () {
//     const pib = document.getElementById('pib');
//     const btc = document.getElementById('btc');
//     const chmg = document.getElementById('chomage');
//     const infl = document.getElementById('inflation');
//     const btnAffichage = document.getElementById('btnaffichage');
//
//     btnAffichage.addEventListener('click', function () {
//
//         const inflNaturel = parseFloat(infl.value);
//         const chmgNaturel = parseFloat(chmg.value);
//         const btcNaturel = parseFloat(btc.value);
//         const pibNaturel = parseFloat(pib.value);
//
//
//         const inflation = 10 - inflNaturel;
//         const chomage = 10 - chmgNaturel;
//
//         console.log(inflation);
//         console.log(chomage);
//
//         const data = [
//             {
//                 type: 'scatterpolar',
//                 r: [btcNaturel, pibNaturel, chomage, inflation, btcNaturel],
//                 // r: [3, 9, 2, 1, 3],
//                 // r: [3, 9, 8, 9, 3],
//                 theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
//                 fill: 'toself'
//             },
//
//             {
//                 type: 'scatterpolar',
//                 r: [5, 10, 10, 10, 5],
//                 theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
//                 fill: 'toself'
//             }
//
//         ];
//
//
//         const layout = {
//             polar: {
//                 radialaxis: {
//                     visible: false,
//                     range: [0, 10]
//                 }
//             },
//             showlegend: false,
//             width: 370,
//             height: 600
//         };
//
//         Plotly.newPlot("myDiv", data, layout);
//     });
// });
//




document.addEventListener("DOMContentLoaded", function () {
    const pib = document.getElementById('pib');
    const btc = document.getElementById('btc');
    const chmg = document.getElementById('chomage');
    const infl = document.getElementById('inflation');
    const btnAffichage = document.getElementById('btnaffichage');

    btnAffichage.addEventListener('click', function () {

        const inflNaturel = parseFloat(infl.value);
        const chmgNaturel = parseFloat(chmg.value);
        const btcNaturel = parseFloat(btc.value);
        const pibNaturel = parseFloat(pib.value);


        const inflation = 10 - inflNaturel;
        const chomage = 10 - chmgNaturel;
        const btcOfficiel = 10 + btcNaturel ;
        const pibOfficiel = 10 + pibNaturel ;

        console.log(inflation);
        console.log(chomage);

        const data = [
            {
                type: 'scatterpolar',
                r: [btcOfficiel, pibOfficiel, chomage, inflation, btcOfficiel],
                // r: [3, 9, 2, 1, 3],
                // r: [3, 9, 8, 9, 3],
                theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
                fill: 'toself'
            },

            {
                type: 'scatterpolar',
                // r: [5, 10, 10, 10, 5],
                r: [15, 20, 10, 10, 15],

                theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
                fill: 'toself'
            }

        ];


        const layout = {
            polar: {
                radialaxis: {
                    visible: false,
                    range: [0, 20]
                }
            },
            showlegend: false,
            width: 370,
            height: 600
        };

        Plotly.newPlot("myDiv", data, layout);
    });
});






// CODE POUR LES CARRE DES KALDORS DU BENIN 2000 2005 2010 2015 2020

document.addEventListener("DOMContentLoaded", function () {
    const btnAnnee2000 = document.getElementById('2000');
    const btnAnnee2005 = document.getElementById('2005');
    const btnAnnee2010 = document.getElementById('2010');
    const btnAnnee2015 = document.getElementById('2015');
    const btnAnnee2020 = document.getElementById('2020');

    const btnbenin = document.getElementById('btnBenin');
    const choixAnnee = document.getElementById('choixAnnee')

    const tableData = document.getElementById('tableData')
    btnbenin.addEventListener('click', function () {
        choixAnnee.style.display = 'flex';
        tableData.style.display = 'block'
    })

// POUR 2000
    const inflNaturel2000 = 4.3 ;
    const chmgNaturel2000 = 0.84 ;
    const btcNaturel2000 = -2.3 ;
    const pibNaturel2000 = 5.9;


    const inflation2000 = 10 - inflNaturel2000;
    const chomage2000 = 10 - chmgNaturel2000;
    const btc2000 = 10 + btcNaturel2000 ;
    const pib2000 = 10 + pibNaturel2000 ;

// POUR 2005
       const inflNaturel2005 = 4.3;
       const chmgNaturel2005 = 0.83;
       const btcNaturel2005 = -3.4;
       const pibNaturel2005 = 1.7;


       const inflation2005 = 10 - inflNaturel2005;
       const chomage2005 = 10 - chmgNaturel2005;
       const btc2005 = 10 + btcNaturel2005 ;
       const pib2005 = 10 + pibNaturel2005 ;

// POUR 2010
          const inflNaturel2010 = 0.9;
          const chmgNaturel2010 = 1.04;
          const btcNaturel2010 = -5.6;
          const pibNaturel2010 = 2.1;


          const inflation2010 = 10 - inflNaturel2010;
          const chomage2010 = 10 - chmgNaturel2010;
          const btc2010 = 10 + btcNaturel2010 ;
          const pib2010 = 10 + pibNaturel2010 ;

// POUR 2015
                const inflNaturel2015 = 0.9;
                const chmgNaturel2015 = 2.02;
                const btcNaturel2015 = -5.96;
                const pibNaturel2015 = 1.8;


                const inflation2015 = 10 - inflNaturel2015;
                const chomage2015 = 10 - chmgNaturel2015;
                const btc2015 = 10 + btcNaturel2015 ;
                const pib2015 = 10 + pibNaturel2015 ;

// POUR 2020
                            const inflNaturel2020 = 2.9;
                            const chmgNaturel2020 = 1.67;
                            const btcNaturel2020 = -1.8;
                            const pibNaturel2020 = 3.8;


                            const inflation2020 = 10 - inflNaturel2020;
                            const chomage2020 = 10 - chmgNaturel2020;
                            const btc2020 = 10 + btcNaturel2020 ;
                            const pib2020 = 10 + pibNaturel2020 ;

    const data2000 = [
        {
            type: 'scatterpolar',
            // r: [7.7, 15.9, 9.16, 5.7, 7.7],
            r: [btc2000, pib2000, chomage2000, inflation2000, btc2000],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
          //  r: [5, 10, 10, 10, 5],
            r: [15, 20, 10, 10, 15],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2005 = [
        {
            type: 'scatterpolar',
            // r: [6.6, 11.7, 9.17, 5.7, 6.6],
            r: [btc2005, pib2005, chomage2005, inflation2005, btc2005],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
          //  r: [5, 10, 10, 10, 5],
            r: [15, 20, 10, 10, 15],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2010 = [
        {
            type: 'scatterpolar',
            // r: [4.4, 12.1, 8.9, 9.1, 4.4],
            r: [btc2010, pib2010, chomage2010, inflation2010, btc2010],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
             r: [15, 20, 10, 10, 15],
            // r: [5, 10, 10, 10, 5],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2015 = [
        {
            type: 'scatterpolar',
            // r: [4.04, 11.8, 7.9, 9.1, 4.04],
            r: [btc2015, pib2015, chomage2015, inflation2015, btc2015],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
             r: [15, 20, 10, 10, 15],
          //  r: [5, 10, 10, 10, 5],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2020 = [
        {
            type: 'scatterpolar',
            // r: [8.2, 13.8, 8.3, 7.1, 8.2],
            r: [btc2020, pib2020, chomage2020, inflation2020, btc2020],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
             r: [15, 20, 10, 10, 15],
          //  r: [5, 10, 10, 10, 5],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const layout = {
        polar: {
            radialaxis: {
                visible: false,
                range: [0, 20]
            }
        },
        showlegend: false,
        width: 370, // Définissez la largeur souhaitée
        height: 600 // Définissez la hauteur souhaitée
    };


    btnAnnee2000.addEventListener('click', function () {
        Plotly.newPlot("myBenin", data2000, layout);
    });

    btnAnnee2005.addEventListener('click', function () {
        Plotly.newPlot("myBenin", data2005, layout);
    });
    btnAnnee2010.addEventListener('click', function () {
        Plotly.newPlot("myBenin", data2010, layout);
    });
    btnAnnee2015.addEventListener('click', function () {
        Plotly.newPlot("myBenin", data2015, layout);
    });
    btnAnnee2020.addEventListener('click', function () {
        Plotly.newPlot("myBenin", data2020, layout);
    });

});

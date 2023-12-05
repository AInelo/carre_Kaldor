
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

        console.log(inflation);
        console.log(chomage);

        const data = [
            {
                type: 'scatterpolar',
                r: [btcNaturel, pibNaturel, chomage, inflation, btcNaturel],
                // r: [3, 9, 2, 1, 3],
                // r: [3, 9, 8, 9, 3],
                theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
                fill: 'toself'
            },

            {
                type: 'scatterpolar',
                r: [5, 10, 10, 10, 5],
                theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
                fill: 'toself'
            }

        ];


        const layout = {
            polar: {
                radialaxis: {
                    visible: false,
                    range: [0, 10]
                }
            },
            showlegend: false,
            width: 370,
            height: 600
        };

        Plotly.newPlot("myDiv", data, layout);
    });
});



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

    const data2000 = [
        {
            type: 'scatterpolar',
            r: [7.7, 15.9, 9.16, 5.7, 7.7],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
            r: [15, 20, 10, 10, 15],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2005 = [
        {
            type: 'scatterpolar',
            r: [6.6, 11.7, 9.17, 5.7, 6.6],
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

    const data2010 = [
        {
            type: 'scatterpolar',
            r: [4.4, 12.1, 8.9, 9.1, 4.4],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
            r: [15, 20, 10, 10, 15],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2015 = [
        {
            type: 'scatterpolar',
            r: [4.04, 11.8, 7.9, 9.1, 4.04],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
            r: [15, 20, 10, 10, 15],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        }

    ];

    const data2020 = [
        {
            type: 'scatterpolar',
            r: [8.2, 13.8, 8.3, 7.1, 8.2],
            theta: ['%BTC', '%PIB', '%chomage', '%INFL', '%BTC'],
            fill: 'toself'
        },

        {
            type: 'scatterpolar',
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


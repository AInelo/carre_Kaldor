
document.addEventListener("DOMContentLoaded", function () {
    const pib = document.getElementById('pib');
    const btc = document.getElementById('btc');
    const chmg = document.getElementById('chomage');
    const infl = document.getElementById('inflation');
    const btnAffichage = document.getElementById('btnaffichage');

    // const inflNaturel = parseFloat(infl.value);
    // const chmgNaturel = parseFloat(chmg.value);

    // const inflation = 10 - inflNaturel;
    // const chomage = 10 - chmgNaturel;

    // console.log(inflation);
    // console.log(chomage);




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
            width: 370, // Définissez la largeur souhaitée
            height: 600 // Définissez la hauteur souhaitée
        };

        Plotly.newPlot("myDiv", data, layout);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const pib = document.getElementById('pib');
    const btc = document.getElementById('btc');
    const chmg = document.getElementById('chomage');
    const infl = document.getElementById('inflation');
    const btnAffichage = document.getElementById('');

    btnAffichageBenin.addEventListener('click', function () {
        const data = [
            {
                type: 'scatterpolar',
                r: [parseFloat(btc.value), parseFloat(pib.value), parseFloat(chmg.value), parseFloat(infl.value), parseFloat(btc.value)],
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
                    range: [0, 20]
                }
            },
            showlegend: false,
            width: 370, // Définissez la largeur souhaitée
            height: 600 // Définissez la hauteur souhaitée
        };

        Plotly.newPlot("myDiv", data, layout);
    });
});




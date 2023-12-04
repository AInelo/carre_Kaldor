
document.addEventListener("DOMContentLoaded", function () {
    const pib = document.getElementById('pib');
    const btc = document.getElementById('btc');
    const chmg = document.getElementById('chomage');
    const infl = document.getElementById('inflation');
    const btnAffichage = document.getElementById('btnaffichage');

    btnAffichage.addEventListener('click', function () {
        const data = [
            {
                type: 'scatterpolar',
                r: [parseFloat(btc.value), parseFloat(pib.value), parseFloat(chmg.value), parseFloat(infl.value), parseFloat(btc.value)],
                theta: ['%BTC', '%PIB', 'Taux de chomage', '%INFL', '%BTC'],
                fill: 'toself'
            },

            // {
            //     type: 'scatterpolar',
            //     r: [parseFloat(btc.value), parseFloat(pib.value), parseFloat(chmg.value), parseFloat(infl.value), parseFloat(btc.value)],
            //     theta: ['%BTC', '%PIB', 'Taux de chomage', '%INFL', '%BTC'],
            //     fill: 'toself'
            // }

        ];



        const layout = {
            polar: {
                radialaxis: {
                    visible: false,
                    range: [0, 50]
                }
            },
            showlegend: false
        };

        Plotly.newPlot("myDiv", data, layout);
    });
});
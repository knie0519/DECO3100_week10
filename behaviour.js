const datavisEL = document.getElementById("datavis");

Plotly.d3.json("dataset.json", myCoolFunction);

// function myCoolFunction(csvData) {
//     const data = [{
//         x: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'],
//         y: [0, 0, 0, 0, 69, 644, 788, 763, 651, 568, 827, 886, 907, 639, 992, 900, 1103, 626, 1048, 654, 436, 221, 113, 24],
//         type: 'bar'
//     }];

//     Plotly.newPlot(datavisEL, data);
// }

function myCoolFunction(jsonData) {
    // const xValues = jsonData.map((row) => row.Data);

    const count = {
        x: jsonData.map((row) => row.time),
        y: jsonData.map((row) => row.count),
        type: 'bar',
        mode: 'lines',
        name: 'count'
    };

    const male = {
        x: jsonData.map((row) => row.time),
        y: jsonData.map((row) => row.male),
        type: 'scatter',
        mode: 'lines',
        name: 'number'
    };

    const female = {
        x: jsonData.map((row) => row.time),
        y: jsonData.map((row) => row.female),
        type: 'scatter',
        mode: 'lines',
        name: 'number'
    };

    const data = [count, male, female];

    Plotly.newPlot(datavisEL, data);
}
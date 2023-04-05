async function getData1(file) {
    let holder = await fetch('../jsonData/data1.json');
    const data = await holder.json();
    console.log(data);
    createTable(data);
}
async function getData2(file) {
    let holder = await fetch('../jsonData/data2.json');
    const data = await holder.json();
    console.log(data);
    createTable(data);
}

async function getData3(file){
    let holder = await fetch('../jsonData/data3.json');
    const data = await holder.json();
    console.log(data);
    createTable(data);
}
    
function createTable(data){
    var table = document.createElement('table'),
    tr = document.createElement('tr'),
    rows = [],
    max = 0,
    i;

table.appendChild(tr);
data.forEach(function (o) {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(o.Header));
    tr.appendChild(th);
    max = Math.max(max, o.Values.length);
});
for (i = 0; i < max; i++) {
    tr = document.createElement('tr'),        
    table.appendChild(tr);
    data.forEach(function (o) {
        var td = document.createElement('td');
        tr.appendChild(td);
        td.appendChild(document.createTextNode(i in o.Values ? o.Values[i] : ''));
    });
}
document.body.appendChild(table);

var histogramCanvas = document.createElement('canvas');
document.body.appendChild(histogramCanvas);

createHistogram(data, histogramCanvas);
}

function createHistogram(data, histogramCanvas) {
    const labels = data.map(item => item.Header);
    const maxDataLength = data.reduce((max, item) => Math.max(max, item.Values.length), 0);
    
    const datasets = Array.from({ length: maxDataLength }, (_, rowIndex) => {
        const rowData = data.map(item => item.Values[rowIndex] || 0);
        const color = {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
        };

        return {
            label: `Row ${rowIndex + 1}`,
            data: rowData,
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 0.5)`,
            borderColor: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`,
            borderWidth: 1
        };
    });

    new Chart(histogramCanvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets,
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                },
            },
            indexAxis: 'x',
            responsive: true,
            maintainAspectRatio: true,
        },
    });
}

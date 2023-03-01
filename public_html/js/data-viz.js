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
}


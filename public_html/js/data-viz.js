async function getDataAA(file) {
    let holder = await fetch('../jsonData/data1.json');
    let data = await holder.json();
    console.log(data);
}
function getData() {
    let file = "./jsonData/data3.json"
    fetch(file, {method: "GET", mode: 'cors', headers: {'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(data => console.log(data));
}

function test3(){
    console.log("test was successful from location 3");
    var el = document.getElementById("testContent");
    el.textContent = "teset test was successful from location three, printing to first test space."
    
}
function fileSelect() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
function test(){
    var el = document.getElementById("testContent");
    el.textContent = "this test was successful";
    
}


const clicker = document.getElementById('clicker');
counter = 0;
function counterFunc(){
    counter+=1;
    clicker.innerHTML = "Увеличение значения :" + counter;
}
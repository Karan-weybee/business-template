let counter =0;
function counterValue(){
    counter++;
    if(counter<501){
document.getElementById('count1').innerHTML=counter
document.getElementById('count2').innerHTML=counter
document.getElementById('count3').innerHTML=counter
document.getElementById('count4').innerHTML=counter
    }
    else{
        return;
    }
}
setInterval(counterValue,.00001);
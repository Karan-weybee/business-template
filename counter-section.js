let counter = 0;
let a = Number(document.getElementById('count1').textContent);
let b = Number(document.getElementById('count2').textContent);
let c = Number(document.getElementById('count3').textContent);
let d = Number(document.getElementById('count4').textContent);
function counterValue() {
    counter++;
    if (counter <= a) { document.getElementById('count1').innerHTML = counter }
    if (counter <= b) {
        document.getElementById('count2').innerHTML = counter
    }
    if (counter <= c) {
        document.getElementById('count3').innerHTML = counter
    }
    if (counter <= d) {

        document.getElementById('count4').innerHTML = counter
    }
    else {
        return;
    }
}
setInterval(counterValue, .00001);
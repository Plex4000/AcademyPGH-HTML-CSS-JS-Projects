// function formatColor(i) {
//     if (i.length < 2) {
//         i = 0 + i;
//     }
//     return i;
// }
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var hour = checkTime(h);
    var minute = checkTime(m);
    var second = checkTime(s);
    document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;
    var r = Math.round((h/23) * 255).toString(16); 
    var g = Math.round((m/59) * 255).toString(16); 
    var b = Math.round((s/59) * 255).toString(16); 
    r = formatColor(r);
    g = formatColor(g);
    b = formatColor(b);
    var background = "#" + r + g + b;
    var background2 = r + g + b;
    document.getElementById('bodybackground').style.backgroundColor = background;
    document.getElementById('hexcode').innerHTML = background2.toUpperCase();
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function formatColor(i) {
    if (i.length < 2) {
        i = "0" + i;
    }
    return i;
}

// if (hour > 12) {
//     hour = hour - 12;
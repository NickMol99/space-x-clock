function clock(){
    var hour = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}
function changeBackground() {
    var hr = (new Date()).getHours();
    if (hr < 12) {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/morning.jpeg')";
    } else if (hr < 20) {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/evening.jpeg')";
    }
    else {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url('images/night.jpeg')";
    }
}
var interval = setInterval(clock, 1000);
clock()
changeBackground()
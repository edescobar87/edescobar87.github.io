function getWindChillValue () {

    var f;
    var t = 76;
    var s = 5;
    var e = Math.pow (s, 0.16);
    
    f = 35.74 + (0.6215 * t) - (35.75 * e) + (0.4275 * t * e);
    
    document.getElementById("windChillValue").innerHTML = getWindChillValue;
    }
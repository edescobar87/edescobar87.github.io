

var myRequest = new XMLHttpRequest();
myRequest.open('GET', '\directory/temples.json');



myRequest.onload = function () {
    var data = JSON.parse(myRequest.responseText);

    showIdahoFallsClosures(data);
    showRexburgClosures(data);
    showKCMissouriClosures(data);
    showOCOklahomaClosures(data);

    // Idaho Falls
    function showIdahoFallsClosures(jsonObj) {
        var closureDate = jsonObj.temple[0].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('IdahoFallsClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Rexburg
    function showRexburgClosures(jsonObj) {
        var closureDate = jsonObj.temple[1].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('RexburgClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Kansas City Missouri
    function showKCMissouriClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('KCMissouriClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }

    // Oklahoma City
    function showOCOklahomaClosures(jsonObj) {
        var closureDate = jsonObj.temple[3].closures;

        $.each( closureDate, function( index ) {
            var dateData = closureDate[index].date;

            var myP = document.createElement('p');
            myP.textContent = dateData;
            document.getElementById('OCOklahomaClosures').appendChild(myP);
            console.log( index + ": " + dateData );
          });
    }
}

myRequest.send();
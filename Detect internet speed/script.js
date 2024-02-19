function testSpeed() {
  var img = new Image(); // It helps us to load images on a web page.

    var startTime, endTime; // Initialize two timer
    
    startTime = new Date().getTime(); // Start the timer and noting current time

    img.onload = function () {
        endTime = new Date().getTime();
        showResult((endTime - startTime) / 1000);
    }
    img.onerror = function (err, msg) {
        showResult('Error:' + msg)
    }


    img.src = "https://source.unsplash.com/random?topics=nature";
}


function showResult(timeTaken) {
    var resultElement = document.getElementById('result');

    if (typeof timeTaken === 'number') {
        var speedMbps = (8 / (timeTaken)).toFixed(2);
        resultElement.innerText = "Your Internet speed is " + speedMbps;
    } else {
        resultElement.innerText = timeTaken;
    }
}
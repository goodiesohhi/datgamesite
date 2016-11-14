
window.onload = function () { 
setInterval(function(){loadDoc(); }, 1000);

}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "puzzle.txt", true);
  xhttp.send();
}

function gotogame(whichgame){
  var source=whichgame.getAttribute("href");
    
  location = "./client.html?game="+source;
   
}

 
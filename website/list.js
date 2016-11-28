
window.onload = function () { 
loadDoc()
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "games.txt", true);
  xhttp.send();
}

function gotogame(whichgame){
  var source=whichgame.getAttribute("href");
    if (source = "htgflash") {
  location = "./client.html?game="+source&height=642&width=1147;
   } else
{
 location = "./client.html?game="+source;
}
}

 
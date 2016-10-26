window.onload = function () { showGame();}

function showGame(whichgame){
  var param = getParameterByName('game');

  var source="./games/"+param+".swf";
  
  var game=document.getElementById("gameHolder");
  var clone=game.cloneNode(true);
  clone.setAttribute('src',source);
  game.parentNode.replaceChild(clone,game)
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function gotogame(whichgame){
  var source=whichgame.getAttribute("href");
    
  location = "./client.html?game="+source;
   
}


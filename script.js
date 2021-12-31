var läufer;
var grundaustellung = true;
var aufschlag = false;
var annahme = false;
var angriff = false;
var block = false;

var screenwidth;
var mobile = false;



function laufer(pos){
    läufer = pos;
    document.getElementById("test").innerHTML = "Läufer " + läufer;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
function screenSize(){
  screenwidth = window.innerWidth;
}
function situationÄndern(idName){
  document.getElementById('menüEins').classList.remove('active');
  document.getElementById('menüZwei').classList.remove('active');
  document.getElementById('menüDrei').classList.remove('active');
  document.getElementById('menüVier').classList.remove('active');
  document.getElementById('menüVierZwei').classList.remove('active');
  document.getElementById(idName).classList.add('active');
  
  if(idName == 'menüEins'){
    grundaustellung = true;
    aufschlag = false;
    annahme = false;
    angriff = false;
    block = false;
    var x = document.getElementsByClassName("active läufer")[0].id;
    läuferÄndern(x);
  }
  else if(idName == 'menüZwei'){
    grundaustellung = false;
    aufschlag = true;
    annahme = false;
    angriff = false;
    block = false;
    var x = document.getElementsByClassName("active läufer")[0].id;
    läuferÄndern(x);
  }
  else if(idName == 'menüDrei'){
    grundaustellung = false;
    aufschlag = false;
    annahme = true;
    angriff = false;
    block = false;
    var x = document.getElementsByClassName("active läufer")[0].id;
    läuferÄndern(x);
  }
  else if(idName == 'menüVier'){
    grundaustellung = false;
    aufschlag = false;
    annahme = false;
    angriff = true;
    block = false;
    var x = document.getElementsByClassName("active läufer")[0].id;
    läuferÄndern(x);
  }
  else if(idName == 'menüVierZwei'){
    grundaustellung = false;
    aufschlag = false;
    annahme = false;
    angriff = false;
    block = true;
    var x = document.getElementsByClassName("active läufer")[0].id;
    läuferÄndern(x);
  }
}

function läuferÄndern(idName){
  screenSize();
  if(screenwidth <= 850){
    mobile = true;
  }
  else{
    mobile = false;
  }
  document.getElementById('menüFünf').classList.remove('active');
  document.getElementById('menüSechs').classList.remove('active');
  document.getElementById('menüSieben').classList.remove('active');
  document.getElementById('menüAcht').classList.remove('active');
  document.getElementById('menüNeun').classList.remove('active');
  document.getElementById('menüZehn').classList.remove('active');
  document.getElementById(idName).classList.add('active');
  var läufer;
  if(mobile == false){
    if(grundaustellung == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.top="78%";
        document.getElementById('zuspiel').style.left="10%";

        document.getElementById('außen1').style.top="78%";
        document.getElementById('außen1').style.left="56%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="56%";

        document.getElementById('diagonal').style.top="10%";
        document.getElementById('diagonal').style.left="56%";

        document.getElementById('außen2').style.top="10%";
        document.getElementById('außen2').style.left="10%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.top="78%";
        document.getElementById('zuspiel').style.left="56%";

        document.getElementById('außen1').style.top="44%";
        document.getElementById('außen1').style.left="56%";

        document.getElementById('mitte1').style.top="10%";
        document.getElementById('mitte1').style.left="56%";

        document.getElementById('diagonal').style.top="10%";
        document.getElementById('diagonal').style.left="10%";

        document.getElementById('außen2').style.top="44%";
        document.getElementById('außen2').style.left="10%";

        document.getElementById('mitte2').style.top="78%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.top="44%";
        document.getElementById('zuspiel').style.left="56%";

        document.getElementById('außen1').style.top="10%";
        document.getElementById('außen1').style.left="56%";

        document.getElementById('mitte1').style.top="10%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="44%";
        document.getElementById('diagonal').style.left="10%";

        document.getElementById('außen2').style.top="78%";
        document.getElementById('außen2').style.left="10%";

        document.getElementById('mitte2').style.top="78%";
        document.getElementById('mitte2').style.left="56%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.top="10%";
        document.getElementById('zuspiel').style.left="56%";

        document.getElementById('außen1').style.top="10%";
        document.getElementById('außen1').style.left="10%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="78%";
        document.getElementById('diagonal').style.left="10%";

        document.getElementById('außen2').style.top="78%";
        document.getElementById('außen2').style.left="56%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="56%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.top="10%";
        document.getElementById('zuspiel').style.left="10%";

        document.getElementById('außen1').style.top="44%";
        document.getElementById('außen1').style.left="10%";

        document.getElementById('mitte1').style.top="78%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="78%";
        document.getElementById('diagonal').style.left="56%";

        document.getElementById('außen2').style.top="44%";
        document.getElementById('außen2').style.left="56%";

        document.getElementById('mitte2').style.top="10%";
        document.getElementById('mitte2').style.left="56%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.top="44%";
        document.getElementById('zuspiel').style.left="10%";

        document.getElementById('außen1').style.top="78%";
        document.getElementById('außen1').style.left="10%";

        document.getElementById('mitte1').style.top="78%";
        document.getElementById('mitte1').style.left="56%";

        document.getElementById('diagonal').style.top="44%";
        document.getElementById('diagonal').style.left="56%";

        document.getElementById('außen2').style.top="10%";
        document.getElementById('außen2').style.left="56%";

        document.getElementById('mitte2').style.top="10%";
        document.getElementById('mitte2').style.left="10%";
      }
    }



    else if(aufschlag == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.top="88%";
        document.getElementById('zuspiel').style.left="0%";

        document.getElementById('außen1').style.top="56%";
        document.getElementById('außen1').style.left="56%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="66%";

        document.getElementById('diagonal').style.top="32%";
        document.getElementById('diagonal').style.left="60%";

        document.getElementById('außen2').style.top="20%";
        document.getElementById('außen2').style.left="40%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.top="78%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="44%";
        document.getElementById('außen1').style.left="58%";

        document.getElementById('mitte1').style.top="32%";
        document.getElementById('mitte1').style.left="66%";

        document.getElementById('diagonal').style.top="30%";
        document.getElementById('diagonal').style.left="40%";

        document.getElementById('außen2').style.top="42%";
        document.getElementById('außen2').style.left="31%";

        document.getElementById('mitte2').style.top="88%";
        document.getElementById('mitte2').style.left="0%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.top="50%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="10%";
        document.getElementById('außen1').style.left="66%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="70%";
        document.getElementById('diagonal').style.left="40%";

        document.getElementById('außen2').style.top="88%";
        document.getElementById('außen2').style.left="0%";

        document.getElementById('mitte2').style.top="62%";
        document.getElementById('mitte2').style.left="58%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.top="32%";
        document.getElementById('zuspiel').style.left="60%";

        document.getElementById('außen1').style.top="20%";
        document.getElementById('außen1').style.left="40%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="0%";

        document.getElementById('außen2').style.top="56%";
        document.getElementById('außen2').style.left="56%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="66%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.top="30%";
        document.getElementById('zuspiel').style.left="40%";

        document.getElementById('außen1').style.top="42%";
        document.getElementById('außen1').style.left="31%";

        document.getElementById('mitte1').style.top="88%";
        document.getElementById('mitte1').style.left="0%";

        document.getElementById('diagonal').style.top="78%";
        document.getElementById('diagonal').style.left="66%";

        document.getElementById('außen2').style.top="44%";
        document.getElementById('außen2').style.left="58%";

        document.getElementById('mitte2').style.top="32%";
        document.getElementById('mitte2').style.left="66%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.top="70%";
        document.getElementById('zuspiel').style.left="40%";

        document.getElementById('außen1').style.top="88%";
        document.getElementById('außen1').style.left="0%";

        document.getElementById('mitte1').style.top="56%";
        document.getElementById('mitte1').style.left="66%";

        document.getElementById('diagonal').style.top="44%";
        document.getElementById('diagonal').style.left="56%";

        document.getElementById('außen2').style.top="10%";
        document.getElementById('außen2').style.left="66%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
    }



    else if(annahme == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.top="86%";
        document.getElementById('zuspiel').style.left="20%";

        document.getElementById('außen1').style.top="74%";
        document.getElementById('außen1').style.left="29%";

        document.getElementById('mitte1').style.top="36%";
        document.getElementById('mitte1').style.left="50%";

        document.getElementById('diagonal').style.top="5%";
        document.getElementById('diagonal').style.left="50%";

        document.getElementById('außen2').style.top="15%";
        document.getElementById('außen2').style.left="20%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.top="70%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="15%";
        document.getElementById('außen1').style.left="20%";

        document.getElementById('mitte1').style.top="0%";
        document.getElementById('mitte1').style.left="50%";

        document.getElementById('diagonal').style.top="23%";
        document.getElementById('diagonal').style.left="5%";

        document.getElementById('außen2').style.top="42%";
        document.getElementById('außen2').style.left="10%";

        document.getElementById('mitte2').style.top="65%";
        document.getElementById('mitte2').style.left="22%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.top="70%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="15%";
        document.getElementById('außen1').style.left="20%";

        document.getElementById('mitte1').style.top="42%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="60%";
        document.getElementById('diagonal').style.left="0%";

        document.getElementById('außen2').style.top="72%";
        document.getElementById('außen2').style.left="20%";

        document.getElementById('mitte2').style.top="88%";
        document.getElementById('mitte2').style.left="50%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.top="0%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="44%";
        document.getElementById('außen1').style.left="10%";

        document.getElementById('mitte1').style.top="66%";
        document.getElementById('mitte1').style.left="20%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="0%";

        document.getElementById('außen2').style.top="22%";
        document.getElementById('außen2').style.left="20%";

        document.getElementById('mitte2').style.top="10%";
        document.getElementById('mitte2').style.left="52%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.top="32%";
        document.getElementById('zuspiel').style.left="52%";

        document.getElementById('außen1').style.top="40%";
        document.getElementById('außen1').style.left="10%";

        document.getElementById('mitte1').style.top="66%";
        document.getElementById('mitte1').style.left="20%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="50%";

        document.getElementById('außen2').style.top="22%";
        document.getElementById('außen2').style.left="22%";

        document.getElementById('mitte2').style.top="10%";
        document.getElementById('mitte2').style.left="66%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.top="53%";
        document.getElementById('zuspiel').style.left="58%";

        document.getElementById('außen1').style.top="65%";
        document.getElementById('außen1').style.left="22%";

        document.getElementById('mitte1').style.top="66%";
        document.getElementById('mitte1').style.left="49%";

        document.getElementById('diagonal').style.top="44%";
        document.getElementById('diagonal').style.left="66%";

        document.getElementById('außen2').style.top="22%";
        document.getElementById('außen2').style.left="22%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
    }
    else if(angriff == true){
  if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="0%";
        document.getElementById('außen1').style.left="50%";

        document.getElementById('mitte1').style.top="39%";
        document.getElementById('mitte1').style.left="50%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="50%";

        document.getElementById('außen2').style.top="15%";
        document.getElementById('außen2').style.left="38%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="0%";
        document.getElementById('außen1').style.left="50%";

        document.getElementById('mitte1').style.top="39%";
        document.getElementById('mitte1').style.left="50%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="40%";

        document.getElementById('außen2').style.top="15%";
        document.getElementById('außen2').style.left="38%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="0%";
        document.getElementById('außen1').style.left="50%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="40%";

        document.getElementById('außen2').style.top="15%";
        document.getElementById('außen2').style.left="38%";

        document.getElementById('mitte2').style.top="39%";
        document.getElementById('mitte2').style.left="50%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="15%";
        document.getElementById('außen1').style.left="38%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="40%";

        document.getElementById('außen2').style.top="0%";
        document.getElementById('außen2').style.left="50%";

        document.getElementById('mitte2').style.top="39%";
        document.getElementById('mitte2').style.left="50%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="15%";
        document.getElementById('außen1').style.left="38%";

        document.getElementById('mitte1').style.top="44%";
        document.getElementById('mitte1').style.left="10%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="50%";

        document.getElementById('außen2').style.top="0%";
        document.getElementById('außen2').style.left="50%";

        document.getElementById('mitte2').style.top="39%";
        document.getElementById('mitte2').style.left="50%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.top="65%";
        document.getElementById('zuspiel').style.left="66%";

        document.getElementById('außen1').style.top="15%";
        document.getElementById('außen1').style.left="38%";

        document.getElementById('mitte1').style.top="39%";
        document.getElementById('mitte1').style.left="50%";

        document.getElementById('diagonal').style.top="88%";
        document.getElementById('diagonal').style.left="50%";

        document.getElementById('außen2').style.top="0%";
        document.getElementById('außen2').style.left="50%";

        document.getElementById('mitte2').style.top="44%";
        document.getElementById('mitte2').style.left="10%";
      }
    }
  }else if(mobile == true){
    if(grundaustellung == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.left="78%";
        document.getElementById('zuspiel').style.bottom="10%";

        document.getElementById('außen1').style.left="78%";
        document.getElementById('außen1').style.bottom="56%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="56%";

        document.getElementById('diagonal').style.left="10%";
        document.getElementById('diagonal').style.bottom="56%";

        document.getElementById('außen2').style.left="10%";
        document.getElementById('außen2').style.bottom="10%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.left="78%";
        document.getElementById('zuspiel').style.bottom="56%";

        document.getElementById('außen1').style.left="44%";
        document.getElementById('außen1').style.bottom="56%";

        document.getElementById('mitte1').style.left="10%";
        document.getElementById('mitte1').style.bottom="56%";

        document.getElementById('diagonal').style.left="10%";
        document.getElementById('diagonal').style.bottom="10%";

        document.getElementById('außen2').style.left="44%";
        document.getElementById('außen2').style.bottom="10%";

        document.getElementById('mitte2').style.left="78%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.left="44%";
        document.getElementById('zuspiel').style.bottom="56%";

        document.getElementById('außen1').style.left="10%";
        document.getElementById('außen1').style.bottom="56%";

        document.getElementById('mitte1').style.left="10%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="44%";
        document.getElementById('diagonal').style.bottom="10%";

        document.getElementById('außen2').style.left="78%";
        document.getElementById('außen2').style.bottom="10%";

        document.getElementById('mitte2').style.left="78%";
        document.getElementById('mitte2').style.bottom="56%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.left="10%";
        document.getElementById('zuspiel').style.bottom="56%";

        document.getElementById('außen1').style.left="10%";
        document.getElementById('außen1').style.bottom="10%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="78%";
        document.getElementById('diagonal').style.bottom="10%";

        document.getElementById('außen2').style.left="78%";
        document.getElementById('außen2').style.bottom="56%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="56%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.left="10%";
        document.getElementById('zuspiel').style.bottom="10%";

        document.getElementById('außen1').style.left="44%";
        document.getElementById('außen1').style.bottom="10%";

        document.getElementById('mitte1').style.left="78%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="78%";
        document.getElementById('diagonal').style.bottom="56%";

        document.getElementById('außen2').style.left="44%";
        document.getElementById('außen2').style.bottom="56%";

        document.getElementById('mitte2').style.left="10%";
        document.getElementById('mitte2').style.bottom="56%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.left="44%";
        document.getElementById('zuspiel').style.bottom="10%";

        document.getElementById('außen1').style.left="78%";
        document.getElementById('außen1').style.bottom="10%";

        document.getElementById('mitte1').style.left="78%";
        document.getElementById('mitte1').style.bottom="56%";

        document.getElementById('diagonal').style.left="44%";
        document.getElementById('diagonal').style.bottom="56%";

        document.getElementById('außen2').style.left="10%";
        document.getElementById('außen2').style.bottom="56%";

        document.getElementById('mitte2').style.left="10%";
        document.getElementById('mitte2').style.bottom="10%";
      }
    }



    else if(aufschlag == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.left="88%";
        document.getElementById('zuspiel').style.bottom="0%";

        document.getElementById('außen1').style.left="56%";
        document.getElementById('außen1').style.bottom="56%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="66%";

        document.getElementById('diagonal').style.left="32%";
        document.getElementById('diagonal').style.bottom="60%";

        document.getElementById('außen2').style.left="20%";
        document.getElementById('außen2').style.bottom="40%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.left="78%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="44%";
        document.getElementById('außen1').style.bottom="58%";

        document.getElementById('mitte1').style.left="32%";
        document.getElementById('mitte1').style.bottom="66%";

        document.getElementById('diagonal').style.left="30%";
        document.getElementById('diagonal').style.bottom="40%";

        document.getElementById('außen2').style.left="42%";
        document.getElementById('außen2').style.bottom="31%";

        document.getElementById('mitte2').style.left="88%";
        document.getElementById('mitte2').style.bottom="0%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.left="50%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="10%";
        document.getElementById('außen1').style.bottom="66%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="70%";
        document.getElementById('diagonal').style.bottom="40%";

        document.getElementById('außen2').style.left="88%";
        document.getElementById('außen2').style.bottom="0%";

        document.getElementById('mitte2').style.left="62%";
        document.getElementById('mitte2').style.bottom="58%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.left="32%";
        document.getElementById('zuspiel').style.bottom="60%";

        document.getElementById('außen1').style.left="20%";
        document.getElementById('außen1').style.bottom="40%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="0%";

        document.getElementById('außen2').style.left="56%";
        document.getElementById('außen2').style.bottom="56%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="66%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.left="30%";
        document.getElementById('zuspiel').style.bottom="40%";

        document.getElementById('außen1').style.left="42%";
        document.getElementById('außen1').style.bottom="31%";

        document.getElementById('mitte1').style.left="88%";
        document.getElementById('mitte1').style.bottom="0%";

        document.getElementById('diagonal').style.left="78%";
        document.getElementById('diagonal').style.bottom="66%";

        document.getElementById('außen2').style.left="44%";
        document.getElementById('außen2').style.bottom="58%";

        document.getElementById('mitte2').style.left="32%";
        document.getElementById('mitte2').style.bottom="66%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.left="70%";
        document.getElementById('zuspiel').style.bottom="40%";

        document.getElementById('außen1').style.left="88%";
        document.getElementById('außen1').style.bottom="0%";

        document.getElementById('mitte1').style.left="56%";
        document.getElementById('mitte1').style.bottom="66%";

        document.getElementById('diagonal').style.left="44%";
        document.getElementById('diagonal').style.bottom="56%";

        document.getElementById('außen2').style.left="10%";
        document.getElementById('außen2').style.bottom="66%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
    }



    else if(annahme == true){
      if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.left="86%";
        document.getElementById('zuspiel').style.bottom="20%";

        document.getElementById('außen1').style.left="74%";
        document.getElementById('außen1').style.bottom="29%";

        document.getElementById('mitte1').style.left="36%";
        document.getElementById('mitte1').style.bottom="50%";

        document.getElementById('diagonal').style.left="5%";
        document.getElementById('diagonal').style.bottom="50%";

        document.getElementById('außen2').style.left="15%";
        document.getElementById('außen2').style.bottom="20%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.left="70%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="15%";
        document.getElementById('außen1').style.bottom="20%";

        document.getElementById('mitte1').style.left="0%";
        document.getElementById('mitte1').style.bottom="50%";

        document.getElementById('diagonal').style.left="23%";
        document.getElementById('diagonal').style.bottom="5%";

        document.getElementById('außen2').style.left="42%";
        document.getElementById('außen2').style.bottom="10%";

        document.getElementById('mitte2').style.left="65%";
        document.getElementById('mitte2').style.bottom="22%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.left="70%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="15%";
        document.getElementById('außen1').style.bottom="20%";

        document.getElementById('mitte1').style.left="42%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="60%";
        document.getElementById('diagonal').style.bottom="0%";

        document.getElementById('außen2').style.left="72%";
        document.getElementById('außen2').style.bottom="20%";

        document.getElementById('mitte2').style.left="88%";
        document.getElementById('mitte2').style.bottom="50%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.left="0%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="44%";
        document.getElementById('außen1').style.bottom="10%";

        document.getElementById('mitte1').style.left="66%";
        document.getElementById('mitte1').style.bottom="20%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="0%";

        document.getElementById('außen2').style.left="22%";
        document.getElementById('außen2').style.bottom="20%";

        document.getElementById('mitte2').style.left="10%";
        document.getElementById('mitte2').style.bottom="52%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.left="32%";
        document.getElementById('zuspiel').style.bottom="52%";

        document.getElementById('außen1').style.left="40%";
        document.getElementById('außen1').style.bottom="10%";

        document.getElementById('mitte1').style.left="66%";
        document.getElementById('mitte1').style.bottom="20%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="50%";

        document.getElementById('außen2').style.left="22%";
        document.getElementById('außen2').style.bottom="22%";

        document.getElementById('mitte2').style.left="10%";
        document.getElementById('mitte2').style.bottom="66%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.left="53%";
        document.getElementById('zuspiel').style.bottom="58%";

        document.getElementById('außen1').style.left="65%";
        document.getElementById('außen1').style.bottom="22%";

        document.getElementById('mitte1').style.left="66%";
        document.getElementById('mitte1').style.bottom="49%";

        document.getElementById('diagonal').style.left="44%";
        document.getElementById('diagonal').style.bottom="66%";

        document.getElementById('außen2').style.left="22%";
        document.getElementById('außen2').style.bottom="22%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
    }
    else if(angriff == true){
  if(idName == 'menüFünf'){
        läufer = 1;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="0%";
        document.getElementById('außen1').style.bottom="50%";

        document.getElementById('mitte1').style.left="39%";
        document.getElementById('mitte1').style.bottom="50%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="50%";

        document.getElementById('außen2').style.left="15%";
        document.getElementById('außen2').style.bottom="38%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSechs'){
        läufer = 2;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="0%";
        document.getElementById('außen1').style.bottom="50%";

        document.getElementById('mitte1').style.left="39%";
        document.getElementById('mitte1').style.bottom="50%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="40%";

        document.getElementById('außen2').style.left="15%";
        document.getElementById('außen2').style.bottom="38%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
      else if(idName == 'menüSieben'){
        läufer = 3;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="0%";
        document.getElementById('außen1').style.bottom="50%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="40%";

        document.getElementById('außen2').style.left="15%";
        document.getElementById('außen2').style.bottom="38%";

        document.getElementById('mitte2').style.left="39%";
        document.getElementById('mitte2').style.bottom="50%";
      }
      else if(idName == 'menüAcht'){
        läufer = 4;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="15%";
        document.getElementById('außen1').style.bottom="38%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="40%";

        document.getElementById('außen2').style.left="0%";
        document.getElementById('außen2').style.bottom="50%";

        document.getElementById('mitte2').style.left="39%";
        document.getElementById('mitte2').style.bottom="50%";
      }
      else if(idName == 'menüNeun'){
        läufer = 5;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="15%";
        document.getElementById('außen1').style.bottom="38%";

        document.getElementById('mitte1').style.left="44%";
        document.getElementById('mitte1').style.bottom="10%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="50%";

        document.getElementById('außen2').style.left="0%";
        document.getElementById('außen2').style.bottom="50%";

        document.getElementById('mitte2').style.left="39%";
        document.getElementById('mitte2').style.bottom="50%";
      }
      else if(idName == 'menüZehn'){
        läufer = 6;
        document.getElementById('zuspiel').style.left="65%";
        document.getElementById('zuspiel').style.bottom="66%";

        document.getElementById('außen1').style.left="15%";
        document.getElementById('außen1').style.bottom="38%";

        document.getElementById('mitte1').style.left="39%";
        document.getElementById('mitte1').style.bottom="50%";

        document.getElementById('diagonal').style.left="88%";
        document.getElementById('diagonal').style.bottom="50%";

        document.getElementById('außen2').style.left="0%";
        document.getElementById('außen2').style.bottom="50%";

        document.getElementById('mitte2').style.left="44%";
        document.getElementById('mitte2').style.bottom="10%";
      }
    }
  }
}
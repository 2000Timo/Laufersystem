
let elements = document.getElementsByTagName("li");

let zeit = 1000;

let namen = [
    "Timo",
    "Kevin",
    "Phil",
    "Simon",
    "Leon",
    "Lena",
    "Nadine",
    "Thomas",
    "Stephanie"
]
let text = "<ul>"; 
text += "<input type=\"text\" id=\"searchName\" onkeyup=\"searchList()\" onclick=\"clearFeldSearch()\" value=\"Search Name\"></input>";
namen.forEach(addli);
text += "<input type=\"text\" id=\"addName\" onclick=\"clearFeld()\" value=\"+ Add Name\"></input>";
text += "</ul>";
document.getElementById("demo").innerHTML = text;
document.getElementById("length").innerHTML = namen.length;

function updateList(){
    text = "<ul>"; 
    text += "<input type=\"text\" id=\"searchName\" onkeyup=\"searchList()\" value=\"Search Name\"></input>";
    namen.forEach(addli);
    text += "<input type=\"text\" id=\"addName\" onclick=\"clearFeld()\" value=\"+ Add Name\"></input>";
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
    document.getElementById("length").innerHTML = namen.length;
    document.getElementById('addName').value = "";
    elements = document.getElementsByTagName("li");
}


function addli(value){
    text += "<li id=\"listenEintrag\">" + value + "</li>";
}

function addName(){
    let getName = document.getElementById('addName').value;
    namen.push(getName);
    updateList();
}

function deleteName(){
    let getName = document.getElementById('searchName').value;
    let indexNummer = 0;
    for(let i=0; i<namen.length; i++){
        if(namen[i].match(getName)){
            indexNummer = i;
        }
    }
    namen.splice(indexNummer,1);
    updateList();
}

function searchList(){
    let getName = document.getElementById('searchName').value;
    for(var i=0; i<elements.length;i++){
        if(elements[i].innerHTML.toUpperCase().includes(getName.toUpperCase())){
            elements[i].style.display = "block";
        }
        else{
            elements[i].style.display = "none";
        }
    }
}

function clearFeld(){
    document.getElementById('addName').value = "";
}

function clearFeldSearch(){
    document.getElementById('searchName').value = "";
}

function playAudio(){
        var audio = new Audio('Songs/In Too Deep.mp3');
        audio.play();
        audio.addEventListener('loadedmetadata', function(){
            var duration = audio.duration;
            document.getElementById("songlength").innerHTML = duration;
            progressbar(duration);
            console.log("The duration of the song is of: " + duration + " seconds");
        },false);

        setTimeout(
            function() {
                audio.pause();
            }, zeit);      
}

function addTime(){
    zeit += 1000;
}

function progressbar(length){
    //var lange = (length/100)*(zeit/1000) + '%';
    var lange = 90 + '%';
    console.log(lange);
    document.getElementById("progressbar").style.width = lange;
}


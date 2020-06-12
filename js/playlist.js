 window.onload = function(){

let storage = localStorage.getItem('playlist');
let playlist = JSON.parse(storage);

let canciones = document.querySelector('.canciones');
//console.log(recuperoStorage);
if(storage == null || storage == "[]"){
    playlist = [];
    canciones.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(canciones);
    
} else {
    console.log("Hay cancciones en el local");

    playlist.forEach(function(cancion){
        addTrack(cancion);
    });
}

function addTrack(id){
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

   // const urlParams = new URLSearchParams(window.location.search);
  //  const id = urlParams.get('id');

    fetch(apiRoute + '/track/' + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {


             //let duration = data.duration / 60 
             var mind = data.duration % (60 * 60);
             var minutes = Math.floor(mind / 60);
 console.log(minutes)
             var secd = mind % 60;
             var seconds = Math.ceil(secd); 
var  duracion = minutes + ':' + seconds;
console.log(duracion);
            

            var contenedor = document.querySelector('.canciones');
            let canciones = ''
            canciones +=  '<ul class="cancion">'
            canciones +=  '<li class="cancion-img"><img src="'+data.album.cover+'" alt="track-img"></li>'
            canciones +=  '<li class="song">' + data.title + '</li>'
            canciones +=  '<li class="artist">' + data.artist.name + '</li>'
            canciones += '<li class="time">' + duracion + '</li>'
            canciones +=  '</ul>'

            contenedor.innerHTML += canciones;

        })
        .catch(function(error){
            console.log(error);
            
        })
}
 }




    

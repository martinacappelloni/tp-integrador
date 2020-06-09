 Window.onload = function(){


let storage = localStorage.getItem('playlist');
let playlist = JSON.parse(storage);

let canciones = document.querySelector('.canciones');
console.log(recuperoStorage);
if(storage == null || storage == "[]"){
    playlist = [];
    canciones.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(canciones);
    
} else {

    playlist.forEach(function(id){
        addTrack(id);
    });
}

function addTrack(id){
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/track/' + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            canciones.innerHTML +=  '<ul class="cancion">'
            canciones.innerHTML +=  '<li class="cancion-img"><img src="'+data.album.cover+'" alt="track-img"></li>'
            canciones.innerHTML +=  '<li class="song">' + data.title + '</li>'
            canciones.innerHTML +=  '<li class="artist">' + data.artist.name + '</li>'
            canciones.innerHTML +=  '</ul>'

        })
        .catch(function(error){
            console.log(error);
            
        })
}
 }




    

window.onload = function(){

// var preguntaPlaylist = '¿Qué nombre le queres poner a la playlist?'
// var nombrePlaylist = prompt(preguntaPlaylist)


// let title = document.querySelector('.title');

// if (nombrePlaylist == null || nombrePlaylist == "") {

//     title.innerHTML = '<li class="title"> my playlist </li>'

// } else{

//     title.innerHTML = '<li class="title">' + nombrePlaylist + '</li>'

// }


// var preguntaUsuario = '¿Cuál es tu nombre?'
// var nombreUsuario = prompt(preguntaUsuario)

// let user = document.querySelector('.user');

// if (nombreUsuario == null || nombreUsuario == "") {

//     user.innerHTML = '<li class="user"> user </li>'

// } else{

//     user.innerHTML = '<li class="user"> ' + nombreUsuario + ' </li>'

// }




let storage = localStorage.getItem('playlist');
let playlist = JSON.parse(storage);

let canciones = document.querySelector('.canciones');

if(storage == null || storage == "[]"){
    playlist = [];
    canciones.innerHTML += '<li class="song"> No hay canciones en tu playlist </li>'
    console.log(canciones);
    
} else {

    playlist.forEach(function(cancion){
        addTrack(cancion);
    });
}

function addTrack(id){
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    fetch(apiRoute + '/track/' + id)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var minutes = Math.floor(data.duration / 60);   
            var seconds = data.duration - minutes * 60;
            var duracion = minutes + ':' + seconds;

            var contenedor = document.querySelector('.canciones');
            let canciones = ''
            canciones +=  '<ul class="cancion" id="' + data.id + '">'
            canciones +=  '<li class="cancion-img"><img src="' + data.album.cover + '" alt="track-img"></li>'
            canciones +=  '<li class="song">' + data.title_short + '</li>'
            canciones +=  '<li class="artist">' + data.artist.name + '</li>'
            canciones +=  '<li class="time">' + duracion + '</li>'
            canciones +=  '</ul>'

            contenedor.innerHTML += canciones;


            var player = document.querySelectorAll('.cancion')

            for (let i = 0; i < player.length; i++) {
                const element = player[i];

                element.addEventListener('click', function(){
                    console.log(this.id) 
                    var iframe = document.querySelector('iframe')
                    iframe.src = "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.id + "&app_id=1"
                })
 
            }





        })
        .catch(function(error){
            console.log(error);
            
        })
    }
    
//no borrar 
}
//no borrar 





    

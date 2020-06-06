window.onload = function () {
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/track/' + id )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data)
        var contenedor = document.querySelector('.contenido')
        var contenido = ' '

        contenido += '<div class="track-img">'
        contenido += '<img src="'+ data.album.cover +'" alt="track-img"></img>'
        contenido += '</div>'
        contenido += '<div style="width: 100%;">'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title">' + data.title + '</li>'
        contenido += '<li class="subtitle">'
        contenido += '<a href="detail-albums.html?id=' + data.album.id + '">' + data.album.title + '</a>'
        contenido += '</li>'
        contenido += '<li class="sub-subtitle">'
        contenido += '<a href="detail-artists.html?id=' + data.artist.id + '">' + data.artist.name + '</a>'
        contenido += '</li>'
        contenido += '<li class="date">' + data.release_date + '</li>'
        contenido += '<section class="add">'
        contenido += '<li class="heart">'
        contenido += '<a href=""><i class="far fa-heart"></i></a>'
        contenido += '</li>'
        contenido += '<li class="plus">'
        contenido += '<a href="playlist.html"><i class="fas fa-plus"></i></a>'
        contenido += '</li>'
        contenido += '<li class="elipsis">'
        contenido += '<a href=""><i class="fas fa-ellipsis-h"></i></a>'
        contenido += '</li>'
        contenido += '</section>'
        contenido += '</ul>'
        contenido += '</div>'
        contenido += '<div class="canciones">'
        contenido += '<ul class="cancion">'
        contenido += '<li class="song">' + data.title + '</li>'
        contenido += '<li class="artist">' + data.artist.name + '</li>'
        contenido += '</ul>'
        contenido += '</div>'
        contenido += '</div>'

        contenedor.innerHTML = contenido;

    })
    .catch(function (error) {
        console.log("Hubo un error" + error);
    })
    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idTrack = datos.get('id');
    
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let route = proxy + "https://api.deezer.com/track/" + idTrack
    
    fetch(route)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
    
            //Resolvemos qué hacemos con los datos
            let titulo = document.querySelector('.titulo');
            titulo.innerHTML += datos.title;
            
            let interprete = document.querySelector('.interprete');
            interprete.innerHTML += datos.artist.name
            
            let album = document.querySelector('.album');
            album.innerHTML += datos.album.title
        }
        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'

        
    })
    .catch(function (error) {
        console.log(error);

    })    

    playlist = [];
} else {
    
    playlist = JSON.parse(recuperoStorage);
}

if(playlist.includes(idTrack)){
    document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
}


let agregar = document.querySelector('.agregar');

agregar.addEventListener('click', function(e){
    
    e.preventDefault();

    if(playlist.includes(idTrack)){
        
        let indiceEnElArray = playlist.indexOf(idTrack);
        playlist.splice(indiceEnElArray, 1);
        document.querySelector('.agregar').innerHTML = "Agregar a playlist";
        console.log(playlist);
        
    } else { 
        
        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"
    }
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem('playlist', playlistParaStorage);
    console.log(localStorage);


})

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
 }

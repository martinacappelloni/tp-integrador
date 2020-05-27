window.onload = function () {
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/artist/' + id )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data)
        var contenedor = document.querySelector('.contenido')
        var contenido = ' '
    
        contenido += '<aside style="width: 100%;">'
        contenido += '<div class="artista-img">'
        contenido += '<img src="img/beatles.jpg" alt="artista-img">'
        contenido += '</div>'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title">the beatles</li>'
        contenido += '<li class="followers">22,977,599</li>'
        contenido +='<section class="add">'
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
        contenido += '</aside>'

        for (let i = 0; i < data.length; i++) {
        var element = data [i];
        contenido += '<div class="canciones">'
        contenido += '<ul class="cancion">'
        contenido += '<a href="detail-tracks.html">'
        contenido += '<li class="song">here comes the sun</li>'
        contenido += '<li class="artist">remastered 2009</li>'
        contenido += '</a>'
        contenido += '</ul>'
        contenido += '</div>'
        }

    contenedor.innerHTML = contenido;
})

    .catch(function (error) {
        console.log("Hubo un error" + error);
    })



}


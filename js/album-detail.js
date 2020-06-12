window.onload = function () {
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/album/' + id )
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {

        console.log(info)
        var contenedor = document.querySelector('.contenido')
        var contenido = ' '
    
        contenido += '<aside style="width: 100%;">'
        contenido += '<div class="album-img">'
        contenido += '<img src="' + info.cover + '" alt="album-img">'
        contenido += '</div>'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title">' + info.title + '</li>'
        contenido += '<li class="artista">'
        contenido += '<a href="detail-artists.html?id=' + info.artist.id + '">' + info.artist.name + '</a>'
        contenido += '</li>'
        contenido += '<li class="genre">'

        for (let i = 0; i < info.genres.data.length; i++) {
            var element = info.genres.data[i];
            contenido += '<a href="detail-genres.html?id=' + element.id + '">' + element.name + '</a>'
        }

        contenido += '</li>'
        contenido += '<li class="date">' + info.release_date + '</li>'
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
        contenido += '<div class="canciones">'

        for (let i = 0; i < info.tracks.data.length; i++) {
            var element = info.tracks.data[i];

            contenido += '<ul class="cancion">'
            contenido += '<a href="detail-tracks.html?id=' + element.id + '">'
            contenido += '<li class="song">' + element.title + '</li>'
            contenido += '<li class="artist">' + element.artist.name + '</li>'
            contenido += '<li class="time">' + element.duration + '</li>'
            contenido += '</a>'
            contenido += '</ul>'

        }

        contenido += '</div>'

        contenedor.innerHTML = contenido;
})

.catch(function (error) {
    console.log("Hubo un error" + error);
})


//
}
//
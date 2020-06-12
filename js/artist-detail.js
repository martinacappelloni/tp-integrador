window.onload = function () {
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/artist/' + id)
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {

        console.log(info)
        var contenedor = document.querySelector('.contenido')
        var contenido = ' '
    
        contenido += '<aside style="width: 100%;">'
        contenido += '<div class="artista-img">'
        contenido += '<img src="'+ info.picture +'" alt="artista-img">'
        contenido += '</div>'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title">' + info.name + '</li>'
        contenido += '<li class="followers">' + info.nb_fan + ' followers</li>'
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
        contenido += '</aside>'
        contenido += '<div class="canciones"></div>'

        contenedor.innerHTML = contenido;
})

.catch(function (error) {
    console.log("Hubo un error" + error);
})


fetch(apiRoute + '/artist/' + id + '/top')
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {

        console.log(info)
        var contenedor = document.querySelector('.canciones')
        var contenido = ' '

        for (let i = 0; i < info.data.length; i++) {
        var element = info.data [i];

        contenido += '<ul class="cancion">'
        contenido += '<a href="detail-tracks.html?id=' + element.id + '">'
        contenido += '<li class="song">' + element.title_short + '</li>'
        contenido += '<li class="artist">' + element.title_version + '</li>'
        contenido += '<li class="time">' + element.duration + '</li>'
        contenido += '</a>'
        contenido += '</ul>'
    
        }

        contenedor.innerHTML = contenido;

})

.catch(function (error) {
    console.log("Hubo un error" + error);
})



//
}
//

window.onload= function(){

const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

fetch(apiRoute + '/chart')
.then(function (response) {
    return response.json();
})
.then(function (informacion) {
    console.log(informacion.tracks.data);
    var contenedor = document.querySelector('.lista-tracks');
    console.log(contenedor);
    var contenido = " ";
    for (let i = 0; i < informacion.tracks.data.length; i++) {
        var element = informacion.tracks.data[i];
        contenido += '<li class="track">'
        contenido += '<img class="track-img" src="' + element.album.cover + '"alt="album-cover">'
        contenido += '<h2 class="title">'
        contenido += '<a href="detail-tracks.html?id='+ element.id + '">' + element.title + '</a>'
        contenido += '</h2>'
        contenido += '<h3 class="artist">'
        contenido += '<a href="detail-artists.html?id=' + element.artist.id + '">' + element.artist.name + '</a>'
        contenido += '</h3>'
        contenido += '</li>'
    }
    contenedor.innerHTML = contenido;
})
.catch(function (error) {
    console.log("Hubo un error" + error);
})


fetch(apiRoute + '/chart')
.then(function (response) {
    return response.json();
})
.then(function (informacion) {
    console.log(informacion.albums.data);
    var contenedor = document.querySelector('.lista-albums');
    console.log(contenedor);
    var contenido = " ";
    for (let i = 0; i < informacion.albums.data.length; i++) {
        var element = informacion.albums.data[i];
        contenido += '<li class="album">'
        contenido += '<img class="album-img" src="' + element.cover + '"alt="album-cover">'
        contenido += '<h2 class="title">'
        contenido += '<a href="detail-albums.html">' + element.title + '</a>'
        contenido += '</h2>'
        contenido += '<h3 class="artist">'
        contenido += '<a href="detail-artists.html">' + element.artist.name + '</a>'
        contenido += '</h3>'
        contenido += '</li>'
    }
    contenedor.innerHTML = contenido;
})
.catch(function (error) {
    console.log("Hubo un error" + error);
})

fetch(apiRoute + '/chart')
.then(function (response) {
    return response.json();
})
.then(function (informacion) {
    console.log(informacion.artists.data);
    var contenedor = document.querySelector('.lista-artists');
    console.log(contenedor);
    var contenido = " ";
    for (let i = 0; i < informacion.artists.data.length; i++) {
        var element = informacion.artists.data[i];
        contenido += '<li class="artist">'
        contenido += '<img class="artist-img" src="' + element.picture + '"alt="artist-picture">'
        contenido += '<h2 class="name">'
        contenido += '<a href="detail-artists.html">' + element.name + '</a>'
        contenido += '</h2>'
        contenido += '</li>'
    }
    contenedor.innerHTML = contenido;
})
.catch(function (error) {
    console.log("Hubo un error" + error);
})
   
   //NO BORRAR
   }
   //NO BORRAR

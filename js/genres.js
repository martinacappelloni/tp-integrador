window.onload= function(){

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
    
    fetch(apiRoute + '/genre')
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {
        console.log(info.data);
        var contenedor = document.querySelector('.lista-tracks');
        console.log(contenedor);
        var contenido = " ";
        for (let i = 0; i < info.data.length; i++) {
            var element = info.data[i];
            contenido += '<li class="genre">'
            contenido += '<img class="track-img" src="' + element.album.cover + '"alt="album-cover">'
            contenido += '<h2 class="title">'
            contenido += '<a href="detail-tracks.html?id=' + element.id + '">' + element.title + '</a>'
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
 //   
 }
 //
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
        contenido += '<a href="detail-tracks.html">' + element.title + '</a>'
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



                // <li class="album">
                //     <img class="album-img" src="img/lewis.png" alt="divinely-uninspired-to-a-hellish-extent">
                //     <h2 class="title">
                //         <a href="detail-albums.html">divinely uninspired to a hellish extent</a>
                //     </h2>
                //     <h3 class="artist">
                //         <a href="detail-artists.html">lewis capaldi</a>
                //     </h3>
                // </li>


   
   
   //NO BORRAR
   }
   //NO BORRAR

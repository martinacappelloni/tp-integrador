window.onload= function(){

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/genre/' + id + '/artists')
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {
        // console.log(info);
        var contenedor = document.querySelector('.lista-genres');
        console.log(contenedor);
        var contenido = " ";

        for (let i = 0; i < info.data.length; i++) {
            var element = info.data[i];

            contenido += '<li class="genre">'
            contenido += '<img class="genre-img" src="' + element.picture + '"alt="genre-cover">'
            contenido += '<h2 class="title">'
            contenido += '<a href="detail-artists.html?id=' + element.id + '">' + element.name + '</a>'
            contenido += '</h2>'
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
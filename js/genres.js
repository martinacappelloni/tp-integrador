window.onload= function(){

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
    
    

    fetch(apiRoute + '/genre/')
    .then(function (response) {
        return response.json();
    })
    .then(function (info) {
        console.log(info.data);
        var contenedor = document.querySelector('.lista-genres');
        console.log(contenedor);
        var contenido = " ";
        for (let i = 0; i < info.data.length; i++) {
            var element = info.data[i];

            contenido += '<li class="genre">'
            contenido += '<img class="genre-img" src="' + element.picture + '"alt="genre-cover">'
            contenido += '<h2 class="title">'
            contenido += '<a href="detail-genres.html?id=' + element.id + '">' + element.name + '</a>'
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
window.onload = function() {

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    var queryString = location.search 
    var queryStringObj = new URLSearchParams(queryString)
    var search = queryStringObj.get('search')
    alert(search)

    fetch(apiRoute + '/search/track' + search)
    .then(function (response) {
        return response.json();
    })
    .then(function (resultados) {

        console.log(resultados)

        var contenido = '';
        var contenedor = document.querySelector('.contenido');
        for (let i = 0; i < resultados.data.length; i++) {
            const element = resultados.data[i];
            contenido += '<h1 class="titulo">'
            contenido += '<a href="detail-genres.html?id=' + info.id + '">' + info.name + '</a>'
            contenido += '</h1>'
        }

         contenedor.innerHTML = contenido;
    })
    
    .catch(function (error) {
        console.log("Hubo un error" + error);
    })

































 // NO BORRAR CISCO //
}

// NO BORRAR CISCO //
window.onload= function(){

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    // const urlParams = new URLSearchParams(window.location.search);
    // const id = urlParams.get('id');



    fetch(apiRoute + 'user/3677140122')
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
        contenido += '<li class="title">@' + info.name + '</li>'
        contenido += '<li class="followers">from ' + info.country + '</li>'
        // contenido += '<section class="add">'
        // contenido += '<li class="heart">'
        // contenido += '<a href=""><i class="far fa-heart"></i></a>'
        // contenido += '</li>'
        // contenido += '<li class="plus">'
        // contenido += '<a href="playlist.html"><i class="fas fa-plus"></i></a>'
        // contenido += '</li>'
        // contenido += '<li class="elipsis">'
        // contenido += '<a href=""><i class="fas fa-ellipsis-h"></i></a>'
        // contenido += '</li>'
        // contenido += '</section>'
        contenido += '</ul>'
        contenido += '</div>'
        contenido += '</aside>'
        contenido += '<div class="canciones"></div>'

        contenedor.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log("Hubo un error" + error);
    })





    let storage = localStorage.getItem('heart');
    let heart = JSON.parse(storage);
    
    let canciones = document.querySelector('.canciones');
    
    if(storage == null || storage == "[]"){
        heart = [];
        canciones.innerHTML += '<li> No hay canciones en tu perfil </li>'
        console.log(canciones);
        
    } else {
    
        heart.forEach(function(cancion){
            addTrack(cancion);
        });
    }
    
    function addTrack(id){
        
        const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
    
        fetch(apiRoute + '/track/' + id)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
    
                var minutes = Math.floor(data.duration / 60);   
                var seconds = data.duration - minutes * 60;
                var duracion = minutes + ':' + seconds;
    
                var contenedor = document.querySelector('.canciones');
                let canciones = ''
                canciones +=  '<ul class="cancion" id="' + data.id + '">'
                canciones +=  '<li class="cancion-img"><img src="' + data.album.cover + '" alt="track-img"></li>'
                canciones +=  '<li class="song">' + data.title + '</li>'
                canciones +=  '<li class="artist">' + data.artist.name + '</li>'
                canciones +=  '<li class="time">' + duracion + '</li>'
                canciones +=  '</ul>'
    
                contenedor.innerHTML += canciones;


                var player = document.querySelectorAll('.cancion')

                for (let i = 0; i < player.length; i++) {
                    const element = player[i];

                    element.addEventListener('click', function(){
                        console.log(this.id) 
                        var iframe = document.querySelector('iframe')
                        iframe.src = "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.id + "&app_id=1"
                    })
    
                }
    
            })
            .catch(function(error){
                console.log(error);
                
            })
    }
    
    
// NO BORRAR
}
// NO BORRAR
    
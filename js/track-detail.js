window.onload = function () {
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch(apiRoute + '/track/' + id )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        console.log(data)
        var contenedor = document.querySelector('.contenido')
        var contenido = ' '

        var minutes = Math.floor(data.duration / 60);   
        var seconds = data.duration - minutes * 60;
        var duracion = minutes + ':' + seconds;

        contenido += '<div class="track-img">'
        contenido += '<img src="'+ data.album.cover +'" alt="track-img"></img>'
        contenido += '</div>'
        contenido += '<div style="width: 100%;">'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title">' + data.title_short + '</li>'
        contenido += '<li class="subtitle">'
        contenido += '<a href="detail-albums.html?id=' + data.album.id + '">' + data.album.title + '</a>'
        contenido += '</li>'
        contenido += '<li class="sub-subtitle">'
        contenido += '<a href="detail-artists.html?id=' + data.artist.id + '">' + data.artist.name + '</a>'
        contenido += '</li>'
        contenido += '<li class="date">' + data.release_date + '</li>'
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
        contenido += '<div class="canciones">'
        contenido += '<ul class="cancion" id="' + data.id + '">'
        contenido += '<li class="song">' + data.title_short + '</li>'
        contenido += '<li class="artist">' + data.artist.name + '</li>'
        contenido += '<li class="time">' + duracion + '</li>'
        contenido += '</ul>'
        contenido += '</div>'
        contenido += '</div>'


        contenedor.innerHTML = contenido;

        // player
        
        var player = document.querySelectorAll('.cancion')

        for (let i = 0; i < player.length; i++) {
            const element = player[i];

            element.addEventListener('click', function(){
                console.log(this.id) 
                var iframe = document.querySelector('iframe')
                iframe.src = "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.id + "&app_id=1"
            })

        }
        
        
        // storage

        let storage = localStorage.getItem('playlist');
        
        if(storage == null){
            playlist = [];
        } else {
            playlist = JSON.parse(storage);
        }
        
        
        if(playlist.includes(id)){
            document.querySelector('.plus').innerHTML = '<a href="playlist.html"><i class="fa fa-minus" aria-hidden="true"></i></a>';
        }
        
        
        let add = document.querySelector('.plus');
        
        add.addEventListener('click', function(e){
            
            e.preventDefault();
            
            if(playlist.includes(id)){
                
                let indiceEnElArray = playlist.indexOf(id);
                playlist.splice(indiceEnElArray, 1);
                document.querySelector('.plus').innerHTML = ' <a href="playlist.html"><i class="fas fa-plus"></i></a>';
                console.log(playlist);
                
            } else { 
                
                playlist.push(id);
                document.querySelector('.plus').innerHTML = '<a href="playlist.html"><i class="fa fa-minus" aria-hidden="true"></i></a>';
                
            }
            
            let storagePlaylist = JSON.stringify(playlist);
            localStorage.setItem('playlist', storagePlaylist);
            console.log(localStorage);
            
            location.href = 'playlist.html'
            
        })









        let storageHeart = localStorage.getItem('heart');
        
        if(storageHeart == null){
            heart = [];
        } else {
            heart = JSON.parse(storageHeart);
        }
        
        
        if(heart.includes(id)){
            document.querySelector('.heart').innerHTML = '<a href=""><i class="fas fa-heart"></i></a>';
        }
        
        
        let like = document.querySelector('.heart');
        
        like.addEventListener('click', function(e){
            
            e.preventDefault();
            
            if(heart.includes(id)){
                
                let indiceEnElArray = heart.indexOf(id);
                heart.splice(indiceEnElArray, 1);
                document.querySelector('.heart').innerHTML = '<a href=""><i class="far fa-heart"></i></a>';
                console.log(heart);
                
            } else { 
                
                heart.push(id);
                document.querySelector('.heart').innerHTML = '<a href=""><i class="fas fa-heart"></i></a>';
                
            }
            
            let storageHeart = JSON.stringify(heart);
            localStorage.setItem('heart', storageHeart);
            console.log(localStorage);
            
            location.href = 'user.html'
            
        })









    })
    .catch(function (error) {
        console.log("Hubo un error" + error);
    })
    
    
}
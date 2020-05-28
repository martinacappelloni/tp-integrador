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
        contenido += '<img src="'+ info.picture +'" alt="album-img">'
        contenido += '</div>'
        contenido += '<div class="info">'
        contenido += '<ul class="list">'
        contenido += '<li class="title"> ' + info.name + '</li>'
        contenido += '<li class="artista"><a href="detail-artists.html"> ' + info.name + '</a></li>'
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

        // for (let i = 0; i < info.data.length; i++) {

        // var element = info.data [i];

        // contenido += '<div class="canciones">'
        // contenido += '<ul class="cancion">'
        // contenido += '<a href="detail-tracks.html">'
        // contenido += '<li class="song">' + element.tracklist + '</li>'
        // contenido += '<li class="artist">remastered 2009</li>'
        // contenido += '</a>'
        // contenido += '</ul>'
        // contenido += '</div>'

        // }

        contenedor.innerHTML = contenido;
})

.catch(function (error) {
    console.log("Hubo un error" + error);
})


//
}
//<aside style="width: 100%;">
{/* <div class="album-img">
<img src="img/lewis.png" alt="album-img">
</div>
<div class="info">
<ul class="list">
    <li class="title">divinely uninspired to a hellish extent</li>
    <li class="artista">
        <a href="detail-artists.html">lewis capaldi</a>
    </li>
    <li class="genre">
        <a href="">pop music</a>
    </li> 
    <li class="date">2019</li>   
    <section class="add">
        <li class="heart">
            <a href="">
                <i class="far fa-heart"></i>
            </a>
        </li>
        <li class="plus">
            <a href="playlist.html">
                <i class="fas fa-plus"></i>
            </a>
        </li>
        <li class="elipsis">
            <a href="">
                <i class="fas fa-ellipsis-h"></i>
            </a>
        </li>
    </section>
</ul>
</div>
</aside>
<div class="canciones">
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">grace</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">bruises</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">hold me while you wait</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">someone you loved</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">maybe</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">forever</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">one</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">don't get me wrong</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">hollywood</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">lost on you</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">fade</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
<ul class="cancion">
    <a href="detail-tracks.html">
        <li class="song">headspace</li>
        <li class="artist">lewis capaldi</li>
    </a>
</ul>
</div> */}
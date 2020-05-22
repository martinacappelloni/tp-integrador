///1) llamar a la api de deezer para que traiga los charts
//2) recorrer el resultado par amostrar algo de lo que me traiga en html
//3) meter el contenido con el formato que ya tienen definido


//uso el fetch para llamar a la api
//uso el query selector para obtener el html donde quiero agregar contenido
//uso innerhtml para agrergar el contenido en el contendero seleccionado

window.onload= function(){


var ul = document.querySelector(".lista-tracks");
ul.innerHTML +='<li class="track"><img class="track-img" src="img/newlight.jpg" alt="newlight"><h2 class="title">    <a href="detail-tracks.html">new light</a></h2><h3 class="artist">    <a href="detail-artists.html">john mayer</a></h3></li>';

}

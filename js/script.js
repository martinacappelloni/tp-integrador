window.onload = function(){




}
///1) llamar a la api de deezer para que traiga los charts
//2) recorrer el resultado par amostrar algo de lo que me traiga en html
//3) meter el contenido con el formato que ya tienen definido


//uso el fetch para llamar a la api
//uso el query selector para obtener el html donde quiero agregar contenido
//uso innerhtml para agrergar el contenido en el contendero seleccionado

window.onload= function(){

    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'
    
   
   
    fetch('https://api.deezer.com/chart')
    .then(function (response) {
        return response.json();
    })
    .then(function (informacion) {
   ​
       console.log(informacion.tracks);
   ​
   ​    var ul = document.querySelector(".lista-tracks");
   
       console.log(ul);
        
       var contenido = "";
   ​
        for (let i = 0; i < informacion.data.length; i++) {
            var element = informacion.data[i];
   ​
   ​
           ul.innerHTML +='<li class="track"><img class="track-img" src="img/newlight.jpg" alt="newlight"><h2 class="title">    <a href="detail-tracks.html">new light</a></h2><h3 class="artist">    <a href="detail-artists.html">john mayer</a></h3></li>';
   
           // contenido += "<h3>" + element.title + "</h3>";
           // contenido += '<img src="' + element.images.original.url + '" alt="">';          
        
   ​
   ​
        }
   ​
        
        contenedor.innerHTML = contenido;
   ​
   ​
        
   ​
    })
    .catch(function (error) {
        console.log("Hubo un error" + error);
    })
   
   
   // probando si me anda git
   
   //NO BORRAR
   }
   //NO BORRAR

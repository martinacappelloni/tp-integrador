Window.onload = function(){
    
    const apiRoute = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';
    
    

    fetch(apiRoute + '/tracks/')
    .then(function (data) {
        return data.json();
    })
    .then(function (info) {
        console.log(info.data);
        var contenedor = document.querySelector('.lista-genres');
        console.log(contenedor);
    
    
    
    // var persona = {
    //     nombre: "Julio Sanchez",
    //     pais: "Argentina",
    // }
    
    // window.localStorage.setItem('usuario', JSON.stringify(persona));
    // window.localStorage.getItem('usuario');
    // JSON.parse(window.localStorage.getItem('usuario'));
    }
    )}
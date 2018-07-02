let iconeMarcadorFeso = '../images/icons/pin.png';
let idMapaModal = 'mapa-modal';


//CODIGO QUE MANIPULA O VALOR DO RAIO DE BUSCA
let range = document.getElementById('seletor-raio');
let valor = document.getElementById('valor-raio');

range.addEventListener('input', function () {
	valor.textContent = this.value;
});

function testarRaioBusca(){
    alert('O valor agora é '+document.getElementById('valor-raio').innerHTML);
}

//DADOS LOCALIZAÇÃO UNIFESO 

// latitude e longitude "cordenadas do local no mapa"
let unifeso = { lat: -22.433842, lng: -42.979199 };
//propriedades do mapa
let propriedadesUnifeso = {
    zoom: 18,
    center: unifeso
}


//DADOS LOCALIZAÇÃO PORTAL DA CIDADE  
let portalCidade = { lat: -22.455658, lng: -42.984497 };
let propriedadesPortalCidade = {
    zoom: 15,
    center: portalCidade
}

function startMap() {

    // // UNIFESO
    // //Constroi o mapa
    let mapUnifeso = new google.maps.Map(document.getElementById("mapa-unifeso"), propriedadesUnifeso);
    //Adiciona o marcador
    let markerUnifeso = new google.maps.Marker(
        {
            position: unifeso,
            map: mapUnifeso,
            animation: google.maps.Animation.BOUNCE,
            icon: iconeMarcadorFeso
        }
    );


    // PORTAL CIDADE
    let mapPortalCidade = new google.maps.Map(document.getElementById("mapa-portal-cidade"), propriedadesPortalCidade);
    let markerPortalCidade = new google.maps.Marker(
        {
            position: portalCidade,
            map: mapPortalCidade,
            // animation: google.maps.Animation.BOUNCE
        }
    );


    buscarRestaurantes();
    buscarEstacionamentos();
    buscarHospitais();
    buscarHoteis();

}

function buscarHoteis() {
    document.getElementById('titulo-modal').innerHTML = "Estadia";
    let local = { lat: -22.433842, lng: -42.979199 };
    prop = {
        center: local,
        zoom: 15
    }

    let mapa = new google.maps.Map(document.getElementById(idMapaModal), prop);

    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });


    request = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        type: ['hotel']
    };


    service = new google.maps.places.PlacesService(mapa);
    service.nearbySearch(request, callback);

    var requestPousada = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'pousada'
    };

    var requestHotel = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'hotel'
    };

    var requestHostel = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'hostel'
    };

    buscaHotel = new google.maps.places.PlacesService(mapa);
    buscaHotel.textSearch(requestHotel, callback);
    buscaHostel = new google.maps.places.PlacesService(mapa);
    buscaHostel.textSearch(requestHostel, callback);
    buscaPousada = new google.maps.places.PlacesService(mapa);
    buscaPousada.textSearch(requestPousada, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);

            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: mapa,
                position: place.geometry.location,
                animation: google.maps.Animation.BOUNCE
            });
        }

    }

}


function buscarHospitais() {
    document.getElementById('titulo-modal').innerHTML = "Primeiros socorros e saúde";
    let local = { lat: -22.433842, lng: -42.979199 };
    prop = {
        center: local,
        zoom: 15
    }

    let mapa = new google.maps.Map(document.getElementById(idMapaModal), prop);
    service = new google.maps.places.PlacesService(mapa);

    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });


    var requestComida = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'primeiros socorros'
    };

    var requestBar = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'hospital'
    };

    var requestRestaurante = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'posto de saude'
    };


    buscaComida = new google.maps.places.PlacesService(mapa);
    buscaComida.textSearch(requestComida, callback);
    buscaBar = new google.maps.places.PlacesService(mapa);
    buscaBar.textSearch(requestBar, callback);
    buscaRestaurante = new google.maps.places.PlacesService(mapa);
    buscaRestaurante.textSearch(requestRestaurante, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);

            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: mapa,
                position: place.geometry.location,
                animation: google.maps.Animation.BOUNCE
            });
        }

    }
}


function buscarRestaurantes() {
    document.getElementById('titulo-modal').innerHTML = "Locais para alimentação";
    let local = { lat: -22.433842, lng: -42.979199 };
    prop = {
        center: local,
        zoom: 15
    }

    let mapa = new google.maps.Map(document.getElementById(idMapaModal), prop);
    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });

    request = {
        location: local,
        radius: 1,
        type: ['restaurant']
    };


    service = new google.maps.places.PlacesService(mapa);
    service.nearbySearch(request, callback);

    var requestComida = {
        location: local,
        radius: 1,
        query: 'comida'
    };

    var requestBar = {
        location: local,
        radius: 1,
        query: 'restaurante'
    };

    var requestRestaurante = {
        location: local,
        radius: 1,
        query: 'lanchonete'
    };

    var requestRestaurante = {
        location: local,
        radius: 1,
        query: 'bar'
    };

    buscaComida = new google.maps.places.PlacesService(mapa);
    buscaComida.textSearch(requestComida, callback);
    buscaBar = new google.maps.places.PlacesService(mapa);
    buscaBar.textSearch(requestBar, callback);
    buscaRestaurante = new google.maps.places.PlacesService(mapa);
    buscaRestaurante.textSearch(requestRestaurante, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);

            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: mapa,
                position: place.geometry.location,
                animation: google.maps.Animation.BOUNCE
            });
        }

    }
}


function buscarEstacionamentos() {
    document.getElementById('titulo-modal').innerHTML = "Estacionamentos";
    let local = { lat: -22.433842, lng: -42.979199 };
    prop = {
        center: local,
        zoom: 15
    }

    let mapa = new google.maps.Map(document.getElementById(idMapaModal), prop);
    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });
    
    request = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        type: ['parking']
    };


    service = new google.maps.places.PlacesService(mapa);
    service.nearbySearch(request, callback);

    var requestComida = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'estacionamento'
    };

    var requestBar = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'rotativo'
    };

    var requestRestaurante = {
        location: local,
        radius: document.getElementById('valor-raio').innerHTML,
        query: 'lava jato'
    };

    buscaComida = new google.maps.places.PlacesService(mapa);
    buscaComida.textSearch(requestComida, callback);
    buscaBar = new google.maps.places.PlacesService(mapa);
    buscaBar.textSearch(requestBar, callback);
    buscaRestaurante = new google.maps.places.PlacesService(mapa);
    buscaRestaurante.textSearch(requestRestaurante, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);

            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: mapa,
                position: place.geometry.location,
                animation: google.maps.Animation.BOUNCE
            });
        }

    }

}

function teste(){
    alert("It works");
    console.log('It works');
    
}




// //Defining some places
// let miamiBeach = { lat: 25.816532, lng: -80.123526 };

// let place1 = { lat: 25.816532, lng: -80.123526 };
// let place2 = { lat: 25.816532, lng: -80.123526 };
// let place3 = { lat: 25.816532, lng: -80.123526 };
// let place4 = { lat: 25.816532, lng: -80.123526 };
// let london = { lat: 51.508742, lng: -0.12085 };

// //Function that start the map
// function startMap() {

//     //Properties
//     let properties = {
//         zoom: 8,
//         center: miamiBeach
//     }
//     let propertiesList = [
//         { zoom: 5, center: place1 },
//         { zoom: 5, center: place2 },
//         { zoom: 5, center: place3 },
//         { zoom: 5, center: place4 }
//     ];
//     let mapMarkerProperties = {
//         zoom: 8,
//         center: london
//     }

//     //Maps
//     let mapPresentation = new google.maps.Map(document.getElementById("map-container"), properties);
//     let map1 = new google.maps.Map(document.getElementById("map1"), propertiesList[0]);
//     let map2 = new google.maps.Map(document.getElementById("map2"), propertiesList[1]);
//     let map3 = new google.maps.Map(document.getElementById("map3"), propertiesList[2]);
//     let map4 = new google.maps.Map(document.getElementById("map4"), propertiesList[3]);
//     let mapMarker = new google.maps.Map(document.getElementById("map-marker"), mapMarkerProperties);
//     let animatedMapMarker = new google.maps.Map(document.getElementById("map-marker-animated"), mapMarkerProperties);
//     let mapIconMarker = new google.maps.Map(document.getElementById("map-marker-icon"), mapMarkerProperties);

//     //Markers
//     let marker = new google.maps.Marker(
//         { position: london, map: mapMarker }
//     );
//     let animatedMarker = new google.maps.Marker(
//         { position: london, map: animatedMapMarker, animation: google.maps.Animation.BOUNCE }
//     );
//     // let mapIconMarker = new google.maps.Marker(
//     //     {position: london, map: mapIconMarker, icon: "../img/pinkball.png"}
//     // );

//     //Polygons
//     let stavanger = new google.maps.LatLng(58.983991, 5.734863);
//     let amsterdam = new google.maps.LatLng(52.395715, 4.888916);
//     let londres = new google.maps.LatLng(51.508742, -0.120850);
//     let polygonMapProperties = { zoom: 4, center: stavanger }
//     let mapPolygon = new google.maps.Map(document.getElementById("map-polygon"), polygonMapProperties);
//     var flightPath = new google.maps.Polygon({
//         path: [stavanger, amsterdam, londres],
//         strokeColor: "#0000FF",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#0000FF",
//         fillOpacity: 0.4
//     });
//     flightPath.setMap(mapPolygon);


//     //Polylines
//     let stavanger2 = new google.maps.LatLng(58.983991, 5.734863);
//     let amsterdam2 = new google.maps.LatLng(52.395715, 4.888916);
//     let london2 = new google.maps.LatLng(51.508742, -0.120850);
//     let polylineMapProperties = { zoom: 4, center: stavanger2 }
//     let mapPolyline = new google.maps.Map(document.getElementById("map-polyline"), polylineMapProperties);

//     var flightPath = new google.maps.Polyline({
//         path: [stavanger2, amsterdam2, london2],
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2
//     });
//     flightPath.setMap(mapPolyline);

//     //Circles
//     let stavanger3 = new google.maps.LatLng(58.983991, 5.734863);
//     let amsterdam3 = new google.maps.LatLng(52.395715, 4.888916);
//     let london3 = new google.maps.LatLng(51.508742, -0.120850);
//     let circleMapProperties = { zoom: 7, center: amsterdam3 }
//     let mapCircle = new google.maps.Map(document.getElementById("map-circle"), circleMapProperties);

//     var myCity = new google.maps.Circle({
//         center: amsterdam3,
//         radius: 50000,
//         strokeColor: "#00FF00",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#00FF00",
//         fillOpacity: 0.4
//     });
//     myCity.setMap(mapCircle);

//     //Infowindow
//     var myCenter = new google.maps.LatLng(51.508742, -0.120850);
//     var mapCanvas = document.getElementById("map-infowindow");
//     var mapOptions = { center: myCenter, zoom: 5 };
//     var mapInfoWindow = new google.maps.Map(mapCanvas, mapOptions);
//     var markerInfowindow = new google.maps.Marker({ position: myCenter })
//     markerInfowindow.setMap(mapInfoWindow);

//     var infowindow = new google.maps.InfoWindow({
//         content: "You can add your comment here!"
//     });

//     infowindow.open(mapInfoWindow, markerInfowindow);
// }


let raioBusca = '1000';
let iconeMarcadorFeso = '../static/images/pin.png';

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
            // animation: google.maps.Animation.BOUNCE
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

    let mapa = new google.maps.Map(document.getElementById('mapa-restaurantes'), prop);

    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });


    // request = {
    //     location: local,
    //     radius: raioBusca,
    //     type: ['hotel']
    // };


    service = new google.maps.places.PlacesService(mapa);
    // service.nearbySearch(request, callback);

    var requestPousada = {
        location: local,
        radius: raioBusca,
        query: 'pousada'
    };

    var requestHotel = {
        location: local,
        radius: raioBusca,
        query: 'hotel'
    };

    var requestHostel = {
        location: local,
        radius: raioBusca,
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

    let mapa = new google.maps.Map(document.getElementById('mapa-restaurantes'), prop);
    service = new google.maps.places.PlacesService(mapa);

    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });


    var requestComida = {
        location: local,
        radius: raioBusca,
        query: 'primeiros socorros'
    };

    var requestBar = {
        location: local,
        radius: raioBusca,
        query: 'hospital'
    };

    var requestRestaurante = {
        location: local,
        radius: raioBusca,
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

    let mapa = new google.maps.Map(document.getElementById('mapa-restaurantes'), prop);
    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });

    request = {
        location: local,
        radius: raioBusca,
        type: ['restaurant']
    };


    service = new google.maps.places.PlacesService(mapa);
    service.nearbySearch(request, callback);

    var requestComida = {
        location: local,
        radius: raioBusca,
        query: 'comida'
    };

    var requestBar = {
        location: local,
        radius: raioBusca,
        query: 'restaurante'
    };

    var requestRestaurante = {
        location: local,
        radius: raioBusca,
        query: 'lanchonete'
    };

    var requestRestaurante = {
        location: local,
        radius: raioBusca,
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

    let mapa = new google.maps.Map(document.getElementById('mapa-restaurantes'), prop);
    // Marcando a feso
    var marcadorUnifeso = new google.maps.Marker({
        map: mapa,
        position: local,
        icon: iconeMarcadorFeso
    });
    
    request = {
        location: local,
        radius: raioBusca,
        type: ['parking']
    };


    service = new google.maps.places.PlacesService(mapa);
    service.nearbySearch(request, callback);

    var requestComida = {
        location: local,
        radius: raioBusca,
        query: 'estacionamento'
    };

    var requestBar = {
        location: local,
        radius: raioBusca,
        query: 'rotativo'
    };

    var requestRestaurante = {
        location: local,
        radius: raioBusca,
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





function testar() {
    alert('Funciona!');
}



//criar um dados de busca
// function realizarBusca(local, propriedades, nomeMapa, flagBusca) {
    //     let mapa = new google.maps.Map(document.getElementById(nomeMapa), propriedades);
//     request = {
    //         location: local,
//         radius: '1600',
//         type: [flagBusca]
//     };
//     service = new google.maps.places.PlacesService(mapa);
//     service.nearbySearch(request, callback);


//     function callback(results, status) {
    //         if (status == google.maps.places.PlacesServiceStatus.OK) {
//             for (var i = 0; i < results.length; i++) {
    //                 var place = results[i];
//                 createMarker(results[i]);
//             }
//         }

//         function createMarker(place) {
//             var placeLoc = place.geometry.location;
//             var marker = new google.maps.Marker({
    //                 map: mapa,
//                 position: place.geometry.location,
//                 animation: google.maps.Animation.BOUNCE
//             });

//             google.maps.event.addListener(marker, 'click', function () {
    //               infowindow.setContent(place.name);
//               infowindow.open(map, this);
//             });
//         }

//     }


// }










// let busca = {
//     center: unifeso,
//     radius: 8047,
//     types: ['pizza']
// }


// let service = new google.maps.places.PlacesService(mapUnifeso);
// alert("Passou aqui");
// service.nearbySearch(busca, callback);
// function callback(results, status) {
    //     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         alert("Place service is ok!");
//         for (let i = 0; i < results.lentgth; i++) {
    //             criarMarcador(results[i]);
//         }
//     } else {
    //         alert("Place Service is not ok!");
//     }
// }

// function criarMacador(place) {
//     let placeLocation = place.geometry.location;
//     let marcador = new google.maps.Marker({
//         map: mapUnifeso,
//         position: place.geometry.location
//     });
// }



// function startMap() {
//     var map = new google.maps.Map(document.getElementById('map-unifeso'), {
    //         center: {lat: -33.866, lng: 151.196},
//         zoom: 15
//       });

//       var infowindow = new google.maps.InfoWindow();
//       var service = new google.maps.places.PlacesService(map);

//       service.getDetails({
    //         placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
    //       }, function(place, status) {
        //         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           var marker = new google.maps.Marker({
    //             map: map,
//             position: place.geometry.location
//           });
//           google.maps.event.addListener(marker, 'click', function() {
//             infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//               'Place ID: ' + place.place_id + '<br>' +
//               place.formatted_address + '</div>');
//             infowindow.open(map, this);
//           });
//         }
//       });
// }




// // BUSCAR ESTACIONAMENTO

// let local = { lat: -22.433842, lng: -42.979199 };
// prop = {
//     center: local,
//     zoom: 15
// }

// let mapa = new google.maps.Map(document.getElementById('mapa-restaurantes'), prop);
// request = {
//     location: local,
//     radius: raioBusca,
//     type: ['parking']
// };


// service = new google.maps.places.PlacesService(mapa);
// service.nearbySearch(request, callback);

// function callback(results, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         for (var i = 0; i < results.length; i++) {
//             var place = results[i];
//             createMarker(results[i]);

//         }
//     }

//     function createMarker(place) {
//         var placeLoc = place.geometry.location;
//         var marker = new google.maps.Marker({
//             map: mapa,
//             position: place.geometry.location,
//             animation: google.maps.Animation.BOUNCE
//         });
//     }

// }
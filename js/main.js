//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiZXJpY3JvY2hlbGVhdSIsImEiOiJja2hoeHBreGwwMm5lMnhyeTBjeDY3NDJtIn0.tcaB6fzDjvKGKNhC-RMyxg' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //Variables for the different basemaps
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'ericrocheleau/ckhhxrp540pc619nvd6yu3opr', token: apitoken,  attribution: mbAttr});
    
    var streets   = L.tileLayer(mbUrl, {id: 'mapbox.streets', token: apitoken, attribution: mbAttr});
    
    var outdoors  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    var satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite', token: apitoken,  attribution: mbAttr});
    

    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkTerrain // Default basemap
    });
 
        //create the basemap control layer*/
    var baseLayers = {
		"Satellite": satellite,
        "Streets": streets,
		"Outdoors": outdoors,
        "Dark Terrain": darkTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);

}

//calling the funcation
$(document).ready(createMap);
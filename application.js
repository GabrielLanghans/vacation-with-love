var map,
    pins = [];

// Initialize the map and the custom overlay.
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(51.45,-0.20),
    minZoom: 9,    
    rotateControl: false,
    streetViewControl: false
    
  };

  map = new google.maps.Map(document.getElementById('container-map'), mapOptions);
  infowindow = new google.maps.InfoWindow({
    maxWidth: 500
    // position : new google.maps.LatLng(this.position.jb,this.position.kb),
    // pixelOffset : new google.maps.Size(0,-34),
    // maxWidth: 50
});

  marker = new google.maps.Marker({
        position : new google.maps.LatLng(51.5034412,-0.119678199999953),
        map : map,
        pinId : 1,
        pinName : "London Eye",
        pinAddress : "Riverside Bldg, County Hall, Westminster Bridge Rd, London SE1 7PB, Reino Unido",
        pinUrl : "http://www.londoneye.com/",
        icon: {url : "sprite.png", size :{width:26,height:40} , origin:new google.maps.Point(0,0) },
        zIndex: 100
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.close(); 
    infowindow.setContent("<div id='"+ this.pinId +"' class='tooltip-map'><h3 class='sub-title-2' style='margin-bottom:5px; padding-bottom:0; white-space:nowrap;'><a href='"+ this.pinUrl +"' target='_blank'>"+ this.pinName +"</a></h3><p>"+ this.pinAddress +"<p></div>"); 
    infowindow.open(map, this); 
});

  marker = new google.maps.Marker({
        position : new google.maps.LatLng(51.5227504,-0.15506379999999353),
        map : map,
        pinId : 1,
        pinName : "Museu Madame Tussauds",
        pinAddress : "Marylebone Rd, London NW1 5LR, Reino Unido",
        pinUrl : "http://www.madametussauds.com/",
        icon: {url : "sprite.png", size :{width:26,height:40} , origin:new google.maps.Point(40,0) },
        zIndex: 100
    });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.close(); 
    infowindow.setContent("<div id='"+ this.pinId +"' class='tooltip-map'><h3 class='sub-title-2' style='margin-bottom:5px; padding-bottom:0; white-space:nowrap;'><a href='"+ this.pinUrl +"' target='_blank'>"+ this.pinName +"</a></h3><p>"+ this.pinAddress +"<p></div>"); 
    infowindow.open(map, this); 
});


    //mapThumb.setCenter(new google.maps.LatLng(latLong[0],latLong[1]));


    pins.push(marker);

    for(i = 0; i < pins.length; i++){
        console.log(pins[i]);
        pins[i].setMap(map);
    }



    //map.setMapTypeId(google.maps.MapTypeId.TERRAIN);  
}
// [END region_initialization]


//instancia o mapa thumb
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {

    $(document).on("click", ".dir h1", function(e){
        if(!$(".dir").hasClass("on")){
            $(".dir").addClass("on");
        }        
    });

    $(document).on("click", ".dir .close", function(e){        
        $(".dir").removeClass("on");
    });





});


                    
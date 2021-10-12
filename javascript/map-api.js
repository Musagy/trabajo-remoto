function iniciarMap(){
  var coord = {lat:-11.48409546374783 ,lng: -77.21624383183229};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
};
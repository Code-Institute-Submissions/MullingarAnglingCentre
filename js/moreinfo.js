function initMap() {
        var uluru = {lat: 35.01099110000001, lng: -115.47335509999999};
        var map = new google.maps.Map(document.getElementById('Ennellmap'), {
          zoom: 7,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }




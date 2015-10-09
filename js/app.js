function setIntervalAndExecute(fn, t) {
    fn();
    return window.setInterval(fn, t); 
}
    
function getIss() { $.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
    function(res) {
        
        var $lat = res.iss_position.latitude;
        var $lng = res.iss_position.longitude;
        var $mapUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+$lat+","+$lng+"&markers=color:black|label:X|"+$lat+","+$lng+"&zoom=3&size=500x500&&key=AIzaSyCFYgUuLsL7hhJEXH2FKSkbqlXb5DRUfmc";

        $("#iss-position").attr("src",$mapUrl);
    }
)}

setIntervalAndExecute(getIss,30000);





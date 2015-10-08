$.getJSON('http://api.open-notify.org/iss-now.json?callback=?').then(
    function(res) {
        
        var $lat = (Math.round(res.iss_position.latitude*100))/100;
        var $lng = (Math.round(res.iss_position.longitude*100))/100;
        
        $("h2").after("<p class='position'>ISS position: "+$lat+" x "+$lng+"</p>");
        $(".position").css({"background-color": "black", "color": "#999", "font-weight": "bold", "padding":"0.5em", "border": "1px solid #999"});
    }
);
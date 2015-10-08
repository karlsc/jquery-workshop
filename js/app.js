var imgSelect = $("img");

imgSelect.each(function(){
    
    var $img = $(this);
    
    $img.on("click", function(){
        
        var $url = $(this).attr("src");
        var $alt = $(this).attr("alt");
        
        $("div.overlay").css('display','flex');
        $("div.overlay-img").append('<img src="'+$url+'"><p>'+$alt+'</p>');
        
        $("div.overlay").on("click", function(){
            
            $(this).css('display','none');
            $("div.overlay-img img, p").remove();
        });
    });
});
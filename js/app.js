var announcements = $("div.announcement");

announcements.each(function() {

    var myButton = $("<button>X</button>");
    var currentDiv = $(this);

    $(this).append(myButton);

    myButton.on("click", function() {

        var $button = $(this);

        if ($button.text() === "X") {

            currentDiv.find("p").hide();
            $button.text("Show announcement");
        }
        else {
            currentDiv.find("p").show();
            $button.text("X");
        }
    });
});

// compressor http://closure-compiler.appspot.com/home

console.time("jq-events");

(function() {
    var disabledEvents = ["mousedown", "mouseup", "mouseout", "mouseover"];

    $("*").each(function() {
        var $t = $(this);
        var $eventsSet = $._data($t[0], "events");
        //add div.jq-events to elements that have events
        if ($eventsSet) {
            $("<div/>", {
                class: "jq-events"
            }).appendTo($t);
            $t.attr("style","outline: 2px solid #fff !important; box-shadow: 0 0 10px red !important");
            $($eventsSet).each(function() {
                //loop through events in set
                $.each(this, function(eventName, eventCode) {
                    //events not in disabledEvents array
                    if (($.inArray(eventName, disabledEvents)) < 0) {
                        //add div for each event
                        $("<div/>", {
                            title: eventCode[0].handler.toString(),
                            text: eventName
                        }).appendTo($t.find(".jq-events"));
                        //bind console log event code
                        $($t).bind(eventName, function() {
                            console.log($t[0]);
                            console.log(eventCode[0].handler);
                        });
                    };
                });
            });
        };
    });
})();

console.timeEnd("jq-events");

//<200ms

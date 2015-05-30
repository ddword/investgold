(function($){
    $(function(){
        function setTime($clock, hour, minute) {
            var hourAngle = Math.ceil(180 + (hour/12)*360 + (minute/(60*12))*360);
            var minuteAngle = Math.ceil(180 + (minute/60)*360);
            var $scoreboard_container = $clock.find('.scoreboard');
            var $scoreboard = $scoreboard_container.find('svg');
            var padding = 10;
            var size = Math.min(Math.ceil($scoreboard_container.width()), Math.ceil($scoreboard_container.height()));
            size = size*(1-padding/100);

            var clockCenter = {
                x: size*0.5,
                y: size*0.5
            };

            var minuteLength = (clockCenter.x) - clockCenter.x*0.20;
            var hourLength = (clockCenter.y) - clockCenter.y*0.30;

            $scoreboard.attr("width", size);
            $scoreboard.attr("height", size);
            $scoreboard.html("");
            $scoreboard.append("<circle class=\"border\" cx=\"" + clockCenter.x + "\" cy=\"" + clockCenter.y + "\" r=\"" + (clockCenter.x - 1) + "\"/>");

            for(var i=0; i<12; i++){
                var x = clockCenter.x + (clockCenter.x-5)*Math.sin(3.14*i*2/12);
                var y = clockCenter.y + (clockCenter.y-5)*Math.cos(3.14*i*2/12);
                $scoreboard.append("<circle cx=\"" + x + "\" cy=\"" + y + "\" r=\"1\" class=\"dot\"/>");
            }

            var offsetY = size*0.05;

            $scoreboard.append(
                "<g class=\"hands\">" +
                    "<rect class=\"hour\" x=\"" + clockCenter.x + "\" y=\"" + (clockCenter.y - offsetY) + "\" width=\"1\" height=\"" + hourLength + "\" rx=\"1\" ry=\"1\" transform=\"rotate(" + hourAngle + " " + clockCenter.x + " " + clockCenter.y + ")\" />" +
                    "<rect class=\"minute\" x=\"" + clockCenter.x + "\" y=\"" + (clockCenter.y - offsetY) + "\" width=\"1\" height=\"" + minuteLength + "\" transform=\"rotate(" + minuteAngle + " " + clockCenter.x + " " + clockCenter.y + ")\"/>" +
                "</g>"
            );
            $clock.html($clock.html());
        }
        function updateClocks() {
            var date = new Date();
            var timestamp = /*(parseInt(*/date.getTime()/* / 1000) + Math.ceil(Math.random() * (600 - 60) + 60)) * 1000*/;
            jQuery.each(cities, function(alias, city){
                var timezone = moment(timestamp).tz(city.timezone);
                setTime($('.clock.' + alias), timezone.format('H'), timezone.format('m'));
            });
        }
        updateClocks();
        setInterval(function() {
            updateClocks();
        }, 1000);
    });
})(jQuery);
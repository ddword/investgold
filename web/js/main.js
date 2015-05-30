(function($){
    var aspect_ratio = 660/455;
    $(function(){
        var $promos = $('.promo a, .content > div:nth-child(1) > div:nth-child(1) a');
        $promos.on('mouseenter', function(){
            $(this).removeClass('disabled');
            $(this).addClass('enabled');
            var video = $(this).find('video')[0];
            video.play();
        });
        $promos.on('mouseleave', function(){
            $(this).removeClass('enabled');
            $(this).addClass('disabled');
            var video = $(this).find('video')[0];
            video.pause();
            video.currentTime = 0;
        });
        function updatePromos()
        {
            var single_width = $('.promo > div:eq(0)').width();
            var single_height = Math.round(single_width / aspect_ratio);
            $(".promo div").css('height', single_height + 'px');
            $(".promo a > span").css('line-height', single_height + 'px');
        }
        updatePromos();
        $( window ).resize(function() {
            updatePromos();
            window.updateClocks();
        });

        var $menu_container = $('.menu');

        $(".header > div:eq(0) > a:eq(0)").on("click", function(){
            $menu_container.stop().animate({
                width: '100%'
            }, 300, function(){
                $menu_container.addClass('in');
            });
        });
        $("a.close-main-menu").on("click", function(){
            $menu_container.removeClass('in');
            $menu_container.animate({
                width: '0%'
            }, 300);
        });
    });
})(jQuery);
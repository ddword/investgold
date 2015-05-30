(function($){
    $(function(){
        function indexRender()
        {
            var $blocks = $('.content > div');
            var aspect_ratio = 1980/892;
            var single_width = $('.content').width();
            var single_height = Math.round(single_width / aspect_ratio);
            $blocks.css('height', single_height + 'px');
            $(".content > div:nth-child(1) > div:nth-child(1) a > span").css('line-height', single_height*0.5 + 'px');
        }
        indexRender();
        $( window ).resize(function() {
            indexRender();
        });
    });
})(jQuery);
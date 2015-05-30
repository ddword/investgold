(function($, stock_quotes){
    $(function(){
        $('div.stock-quotes table tbody').html('');
        $.each(stock_quotes, function(key, quotes){
            $.each(quotes, function(index, value) {
                $(
                    '<tr>' +
                    '    <td>' + value.name + '</td>' +
                    '    <td>' + value.current + '</td>' +
                    '    <td>' + value.absolute + '</td>' +
                    '    <td>' + value.percentage + '</td>' +
                    '</tr>'
                ).appendTo($('div.stock-quotes table[data-key="' + key + '"] tbody'));
            });
        });
    });
})(jQuery, stock_quotes);
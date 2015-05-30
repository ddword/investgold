(function($, exchange_rates){
    $(function(){
        $('div.exchange-rates table tbody').html('');
        $.each(exchange_rates, function(key, rates){
            $.each(rates, function(index, value) {
                $(
                    '<tr>' +
                    '    <td>' + value.name + '</td>' +
                    '    <td>' + value.current + '</td>' +
                    '    <td>' + value.absolute + '</td>' +
                    '    <td>' + value.percentage + '</td>' +
                    '</tr>'
                ).appendTo($('div.exchange-rates table[data-key="' + key + '"] tbody'));
            });
        });
    });
})(jQuery, exchange_rates);
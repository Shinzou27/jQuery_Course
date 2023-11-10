(function($) {
    $.fn.showLink = function(){
        this.each(function(){
            let link = $(this).attr('href').slice($(this).attr('href').indexOf('//')+2);
            $(this).append(` (${link})`);
        });
        return this;
    }
}(jQuery));
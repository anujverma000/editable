/*
editable.js
*/

(function ($) {
    $.fn.editable = function (callback) {
        return this.each(function () {
            var $this = $(this);
            $this.attr("contenteditable","true")
            var htmlold = $this.html();
            $this.bind('blur paste cut', function () {
                var htmlnew = $this.html();
                if (htmlold !== htmlnew) {
                    htmlold = $this.html();
                    if(callback)
                    	callback(htmlold);                 
                }
            })
        })
    }
})(jQuery);
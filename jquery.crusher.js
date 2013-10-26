;(function($)
{
    $.fn.extend({
        crush: function() {
            if (this.is('textarea')) {
                var $this = this;

                $this.css({
                    'min-height': $this.css('height'),
                    overflow: 'hidden',
                    resize: 'none'
                });

                $this.on('keyup', function() {
                    $this.css('height', 0);
                    $this.css('height', ($this[0].scrollHeight + parseInt($this.css('padding-top')) + parseInt($this.css('padding-bottom'))) + 'px');
                }).trigger('keyup');
            }

            return this;
        }
    });
})
(jQuery);
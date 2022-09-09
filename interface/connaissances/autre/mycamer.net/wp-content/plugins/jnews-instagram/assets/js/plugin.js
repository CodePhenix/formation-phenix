/**
 * Instagram by Jegtheme
 */
(function ($) {
    "use strict";

    var Instagram = Object()

    Instagram.init = function () {
        $('.lazyload-instavid').each(function () {
            $(this).waypoint({
                handler: function () {
                    if (! this.element.classList.contains('loaded')) {
                        this.element.children[0].src=this.element.children[0].getAttribute('data-src')
                        this.element.load()
                        this.element.play()
                        this.element.classList.add('loaded')
                    }
                },
                offset: '100%'
            })
        })
    }

    $(function () {
        Instagram.init()
        window.jnews.instagram = Instagram
    })
})(jQuery);
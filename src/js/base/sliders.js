$(document).ready(function(){
    // Showcase Slider
    if ($('.showcase_slider li').length > 1) {
        // Slider Options
        var showcase_options = {
            auto: true,
            mode: "fade",
            pager: false,
            speed: 1000,
            touchEnabled: true,
            pause: 5000,
            prevText: '',
            nextText: '',
            prevSelector: '',
            nextSelector: '',

            onSlideBefore: function(){
                showcaseSlider.stopAuto();
                showcaseSlider.startAuto();
            }
        }

        var showcase_options_active = {
            auto: true,
            mode: "fade",
            pager: false,
            speed: 5000,
            touchEnabled: true,
            pause: 1000,
            prevText: '',
            nextText: '',
            prevSelector: '',
            nextSelector: '',

            // Add "active" class to first "li" on load.
            onSliderLoad: function () {
                $('.showcase_slider > li').eq(0).addClass('active');
            },

            onSlideBefore: function(){
                showcaseSlider.stopAuto();
                showcaseSlider.startAuto();

                // Add "active" class to current slide
                var current = showcaseSlider.getCurrentSlide();

                setTimeout(function () {
                    $('.showcase_slider > li').removeClass('active').eq(current).addClass('active');
                }, 1);
            }
        }
        
        var showcaseSlider = $('.showcase_slider').bxSlider(showcase_options);
    }
});

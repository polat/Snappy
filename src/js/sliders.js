$(document).ready(function(){
    // Slider Options
    var basicFade = {
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
    }

    var basicFadeActive = {
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

        onSlideBefore: function () {
            var current = showcaseSlider.getCurrentSlide();

            setTimeout(function () {
                $('.showcase_slider > li').removeClass('active').eq(current).addClass('active');
            }, 1);
        },

        onSliderLoad: function () {
            $('.showcase_slider > li').eq(0).addClass('active')
        }
    }

    var showcaseSlider = $('.showcase_slider').bxSlider(basicFade);

    $(".showcase .bx-controls a").click(function () {
        showcaseSlider.stopAuto();
        showcaseSlider.startAuto();
    });
});

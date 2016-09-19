$(document).ready(function () {
    /* Lightbox Settings */
    $('a[rel="image"]').swipebox();
    $('.video').swipebox();
    $('.map').colorbox({iframe: true, width: '90%', height: '80%'});
    $('.popup').colorbox({inline:true,  fastIframe: false, maxWidth: '90%', maxHeight: '90%'});
    $(document.body).on('click touchend','#swipebox-slider .current img', function(e){
        return false;
    }).on('click touchend','#swipebox-slider .current', function(e){
        $('#swipebox-close').trigger('click');
    });

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

    $(".showcase .bx-controls a").click(function(){
        showcaseSlider.stopAuto();
        showcaseSlider.startAuto();
    });

    // Scroll Top Button
    var scroll = $(window).scrollTop();

    if(scroll > 500){
        $(".scrollTop").addClass("visible");
    }else {
        $(".scrollTop").removeClass("visible");
    }

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 500){
            $(".scrollTop").addClass("visible");
        }else {
            $(".scrollTop").removeClass("visible");
        }
    });

    $(function() {
        $('a.scrollTop').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* FAQ
    $(".faq > li > a.faq_trigger").click(function(){
        $(this).parent().toggleClass("active").siblings("li").removeClass("active");
        $(this).siblings(".faq_content").stop().slideToggle(300).parent().siblings("li").children(".faq_content").stop().slideUp(300);
    });
    */

    /*  Slidebars
    $.slidebars();

    $('.mobile_btn').on('touchstart', function (e) {
        $(this).toggleClass('is-active');
        return false;
    });

    $("#sb-site").on('touchstart', function (e){
        if($(".mobile_btn").hasClass('is-active')){
            $(".mobile_btn").removeClass('is-active');
            return false;
        }
    });

    // Mobile Menu Toggle
    $(".mobile_list li a").click(function(){
        if($(this).parent().hasClass("parent")){
            $(this).parent().siblings("li").children("ul").stop().slideUp();
            $(this).siblings("ul").stop().slideToggle();
        }
    });
    */
});

function messageBox (message) {
    $(function () {
        if ($('#colx').html() != null) {
            $('.messageBoxContainer').html(message);
            $('.inline').colorbox({inline: true, maxWidth: '90%', height: 'auto'});
            $('#cola').click();
        } else {
            $('#colx').remove();
            var appendtext = '<div id="colx" style="display: none;"><a class="inline" href="#coldiv" id="cola"></a><div id="coldiv"><div style="padding:10px; font-size:18px; color:#333; text-align:center" class="messageBoxContainer">' + message + '</div></div></div>';
            $('body').append(appendtext);
            $('.inline').colorbox({inline: true, width: 'auto', height: 'auto'});
            $('#cola').click();
        }
    });
}

function openMobileMap (lat,long){
    // Android
    if((navigator.platform.indexOf("iPhone") != -1)
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1))
        window.open('maps://maps.google.com/?q='+ lat +','+ long + '');
    else
    // IOS
        window.open('http://maps.google.com/?q='+ lat +','+ long + '');
}

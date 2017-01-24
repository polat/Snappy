$(document).ready(function () {
    // <---- SCROLL TOP BUTTON ----
    var scroll = $(window).scrollTop();

    // Scroll Top Button
    if (scroll > 500) {
        $(".scrollTop").addClass("visible");
    } else {
        $(".scrollTop").removeClass("visible");
    }

    $(window).scroll(function () {
        scroll = $(window).scrollTop();

        if (scroll > 500) {
            $(".scrollTop").addClass("visible");
        } else {
            $(".scrollTop").removeClass("visible");
        }
    });
    // ---- SCROLL TOP BUTTON ---->


    // <---- SVG ELEMENTS FOR IE ----
    svg4everybody();
    // ---- SVG ELEMENTS FOR IE ---->


    // Basic Popup
    $(".s-popup").magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade'
    });

    // Inline Popup
    $(".s-popup-inline").magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade'
    });

    // Gallery Popup
    $('.s-popup-gallery').each(function(){
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade'
        });
    });

    /*/ <---- SLIDEBARS ----
    var controller = new slidebars();
    controller.init();

    $('.mobile_btn').on('click', function (e) {
        controller.toggle( 'id-1' );

        $(this).toggleClass('is-active');
        return false;
    });

    $("div[canvas='container']").on('click', function (e){
        controller.close( 'id-1' );

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
    // ---- SLIDEBARS ----> */

});

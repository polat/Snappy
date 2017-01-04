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
    $(".modal").magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade'
    });

    // Gallery Popup
    $('.modal-gallery').each(function(){
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
    // ---- SLIDEBARS ----> */

});

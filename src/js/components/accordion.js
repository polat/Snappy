$(document).ready(function(){
    var ww = $(window).width();

    // <---- ACCORDION  ----
    $(".s-accordion li > a").click(function(){
        var clicked = $(this);

        $(this).toggleClass("active").parent().siblings("li").children("a").removeClass("active");

        $(this).siblings("div").stop().slideToggle().parents("li").siblings("li").children("div").stop().slideUp().promise().done(function(){
            var gutter = parseInt($(this).css("padding-top"));
            var clicked_offset = clicked.offset().top;
            var scroll_target = clicked_offset - gutter;

            if(clicked.parents(".s-accordion").hasClass("s-accordion-autoscroll")){
                $("html,body").animate({
                    scrollTop: scroll_target
                },500);
            }
        });
    });
    // ---- ACCORDION  ---->
});

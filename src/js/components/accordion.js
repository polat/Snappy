$(document).ready(function(){
    var ww = $(window).width();

    // <---- ACCORDION  ----
    $(".s-accordion li > a").click(function(){
        var clicked = $(this);
        var clicked_offset;

        $(this).toggleClass("active").parent().siblings("li").children("a").removeClass("active");

        $(this).siblings("div").stop().slideToggle().parents("li").siblings("li"). children("div").stop().slideUp().promise().done(function(){
            var gutter = parseInt($(this).css("padding"));
            clicked_offset = clicked.offset().top;

            if(clicked.parents(".s-accordion").hasClass("s-accordion-autoscroll")){
                $("html,body").animate({
                    scrollTop: clicked_offset - gutter
                },500);
            }
        });
    });
    // ---- ACCORDION  ---->
});

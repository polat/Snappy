$(document).ready(function () {

    /* Colorbox  & Swipebox*/
    var windowWidth = $(window).width();
    var isTop = windowWidth > 800 ? 1 : 0;
    if(windowWidth < 800){
        setSwipe();
    }else if(windowWidth > 800) {
        setColorBox();
    }

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(isTop == 1 && windowWidth < 800){
            setSwipe();
        }else if(isTop == 0 && windowWidth > 800) {
            setColorBox();
        }
        isTop = windowWidth > 800 ? 1 : 0;
    });

    function setColorBox() {
        $("a[rel='image']").removeClass("swipe").addClass("colorbox");
        $("a.colorbox[rel='image']").colorbox({width: "auto", height: "auto"});
    }

    function setSwipe() {
        $("a[rel='image']").removeClass("colorbox").addClass("swipe");
        $.colorbox.remove();
        $("a.swipe[rel='image']").swipebox();
    }
    
    $(".video").colorbox({iframe: true, innerWidth: 800, innerHeight: 600});
    $(".map").colorbox({iframe: true, width: "90%", height: "80%"});

    /* Placeholder */
    $('input, textarea').placeholder();

});

$(document).ready(function () {

    /* Colorbox */
    $("a[rel='image']").colorbox({width: "auto", height: "auto"});
    $(".video").colorbox({iframe: true, innerWidth: 800, innerHeight: 600});
    $(".map").colorbox({iframe: true, width: "90%", height: "80%"});

    /* Placeholder */
    $('input, textarea').placeholder();

});

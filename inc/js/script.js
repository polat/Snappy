$(document).ready(function () {

    /* Lightbox Settings */
    $('a[rel="image"]').swipebox();
    $('.video').colorbox({iframe: true, innerWidth: 800, innerHeight: 600});
    $('.map').colorbox({iframe: true, width: '90%', height: '80%'});
    $('.popup').colorbox({inline:true,  fastIframe: false, maxWidth: '90%', maxHeight: '80%'});
    $(document.body).on('click touchend','#swipebox-slider .current img', function(e){
        return false;
    }).on('click touchend','#swipebox-slider .current', function(e){
        $('#swipebox-close').trigger('click');
    });

    /* Showcase Slider */
    $('ul#showcaseSlider').bxSlider({
        auto: true,
        mode: 'fade',
        pager: false,
        speed: 1000,
        touchEnabled: true,
        pause: 4000,
        prevText: '',
        nextText: '',
        prevSelector: '',
        nextSelector: ''
    });
    
});

function messageBox (message) {
    $(function () {
        if ($('#colx').html() != null) {
            $('.messageBoxContainer').html(message);
            $('.inline').colorbox({inline: true, width: 'auto', height: 'auto'});
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

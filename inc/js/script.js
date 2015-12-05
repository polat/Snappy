$(document).ready(function () {

    /* Lightbox Settings */
    $('a[rel="image"]').swipebox();
    $('.video').colorbox({iframe: true, innerWidth: 800, innerHeight: 600});
    $('.map').colorbox({iframe: true, width: '90%', height: '80%'});
    $('.popup').colorbox({inline:true,  fastIframe: false, maxWidth: '90%', maxHeight: '90%'});
    $(document.body).on('click touchend','#swipebox-slider .current img', function(e){
        return false;
    }).on('click touchend','#swipebox-slider .current', function(e){
        $('#swipebox-close').trigger('click');
    });

    /* Main Slider */
    $('ul.mainSlider').bxSlider({
        auto: true,
        pager: false,
        speed: 1000,
        touchEnabled: true,
        pause: 3000,
        prevText: '',
        nextText: '',
        prevSelector: '',
        nextSelector: ''
        /* Adds Active Class To Current Slide
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.active-slide').removeClass('active-slide');
            $('ul.mainSlider > li').eq(currentSlideHtmlObject).addClass('active-slide')
        },
        onSliderLoad: function () {
            $('ul.mainSlider > li').eq(0).addClass('active-slide')
        }
         */
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

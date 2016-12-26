// <---- OPEN MOBILE MAP ----
function openMobileMap (lat,long) {
    if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
      // Android
      window.open('maps://maps.google.com/?q='+ lat +','+ long + '');
    } else {
      // IOS
      window.open('http://maps.google.com/?q='+ lat +','+ long + '');
    }
}
// ---- OPEN MOBILE MAP ---->


// <---- SCROLL TO ----
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
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
// ---- SCROLL TO ---->

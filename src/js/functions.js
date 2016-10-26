function messageBox (message) {
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
}

function openMobileMap (lat,long) {
    if((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)) {
      // Android
      window.open('maps://maps.google.com/?q='+ lat +','+ long + '');
    } else {
      // IOS
      window.open('http://maps.google.com/?q='+ lat +','+ long + '');
    }
}

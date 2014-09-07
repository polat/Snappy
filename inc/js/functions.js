/**
 *
 * @param String
 *
 */
function colorboxalert(message) {
    $(function () {
        if ($("#colx").html() != null) {
            $(".colorboxalertMessage").html(message);
            $(".inline").colorbox({inline: true, width: "auto", height: "auto"});
            $("#cola").click();
        } else {
            $("#colx").remove();
            var appendtext = '<div id="colx" style="display:none;"><a class="inline" href="#coldiv" id="cola"></a><div id="coldiv"><div style="padding:10px;font-size:18px;color:#333;text-align:center" class="colorboxalertMessage">' + message + '</div></div></div>';
            $("body").append(appendtext);
            $(".inline").colorbox({inline: true, width: "auto", height: "auto"});
            $("#cola").click();
        }
    });
}

/**
 *
 * @param String form
 * @param String sendButton
 * @param String failedClass
 * @param String successClass
 *
 */
function formvalidation(form, sendButton, failedClass, successClass) {

    var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    var emptyFunc = function () {
        if ($(this).val().trim() == "") {
            $(this).addClass(failedClass).removeClass(successClass);
        } else {
            $(this).removeClass(failedClass).addClass(successClass);
        }
    };

    var emailFunc = function () {
        if (!emailRegex.test($(this).val())) {
            $(this).addClass(failedClass).removeClass(successClass);
        } else {
            $(this).removeClass(failedClass).addClass(successClass);
        }
    };

    var phoneFunc = function () {
        if (!phoneRegex.test($(this).val())) {
            $(this).addClass(failedClass).removeClass(successClass);
        } else {
            $(this).removeClass(failedClass).addClass(successClass);
        }
    };

    var captchaFunc = function () {
        var thisElem = $(this);
        if (thisElem.val() != "") {
            $.ajax({
                type: "POST",
                url: "php/check_captcha.php",
                dataType: 'json',
                data: thisElem
            }).success(function (msg) {
                if (msg["result"] == true) {
                    thisElem.removeClass(failedClass).addClass(successClass);
                } else if (msg["result"] == false) {
                    thisElem.addClass(failedClass).removeClass(successClass);
                }
            });
        } else {
            $(this).addClass(failedClass).removeClass(successClass);
        }
    };

    $(sendButton).click(function () {
        $(form + ' *[validation="empty"]').each(emptyFunc);
        $(form + ' *[validation="email"]').each(emailFunc);
        $(form + ' *[validation="phone"]').each(phoneFunc);
        $(form + ' *[validation="captcha"]').each(captchaFunc);
        $('.' + failedClass + ':first').focus();
    });

    var captchaImageSrc = $('img#captcha_image').attr("src");

    $('img#captcha_image').on('load', function () {
        if ($(this).attr("src") != captchaImageSrc) {
            $(form + ' *[validation="captcha"]').each(captchaFunc);
        }
    });

    $(form + ' *[validation="empty"]').keyup(emptyFunc).blur(emptyFunc).on('change', emptyFunc);
    $(form + ' *[validation="email"]').keyup(emailFunc).blur(emailFunc).on('change', emailFunc);
    $(form + ' *[validation="phone"]').keyup(phoneFunc).blur(phoneFunc).on('change', phoneFunc);
    $(form + ' *[validation="captcha"]').keyup(captchaFunc).blur(captchaFunc).on('change', captchaFunc);

}

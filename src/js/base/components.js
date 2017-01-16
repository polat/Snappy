$(document).ready(function(){
    var ww = $(window).width();

    // <---- TABS  ----
    $(".tab_list").each(function(){
        var tab = $(this).parents(".tab");
        var tab_breakpoint = 768;
        var tab_check_breakpoint = $(this).parent().attr("tab-breakpoint");

        // Check if there is tab-breakpoint attribute on "tab" element.
        // If not, default  value is 768
        if (typeof tab_check_breakpoint !== typeof undefined && tab_check_breakpoint !== false) {
            tab_breakpoint = $(this).parent().attr("tab-breakpoint");
        }

        var tab_select = $("<div class='tab_select'><select></select></div>");
        var current = $(this);

        $(this).children("li").each(function(){
            var tab_val = $(this).children("a").text();
            var tab_option = $("<option value='"+ tab_val +"'>"+ tab_val +"</option>");

            tab_select.children("select").append(tab_option);
            tab.prepend(tab_select);
        });

        if(ww < tab_breakpoint){
            current.hide();
            current.siblings(".tab_select").show();
        } else {
            current.show();
            current.siblings(".tab_select").hide();
        }

        $(window).resize(function(){
            ww = $(window).width();

            if(ww < tab_breakpoint){
                current.hide();
                current.siblings(".tab_select").show();
            } else {
                current.show();
                current.siblings(".tab_select").hide();
            }
        });
    });

    // TAB Click & Select
    $(".tab_list > li").click(function(){
        var tab_index = $(this).index();

        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).parent().siblings(".tab_content").removeClass("active").eq(tab_index).addClass("active");
    });

    $(".tab_select select").change(function(){
        var select_index = $(this).children("option:selected").index();

        $(this).parents(".tab_select").siblings(".tab_content").removeClass("active").eq(select_index).addClass("active");
    });
    // ---- TABS  ---->


    // <---- ACCORDION  ----
    $(".accordion li > a").click(function(){
        var clicked = $(this);
        var clicked_offset;

        $(this).toggleClass("active").parent().siblings("li").children("a").removeClass("active");

        $(this).siblings("div").stop().slideToggle().parents("li").siblings("li"). children("div").stop().slideUp().promise().done(function(){
            var gutter = parseInt($(this).css("padding"));
            clicked_offset = clicked.offset().top;

            if($(clicked).parents(".accordion").hasClass("accordion-autoscroll")){
                $("html,body").animate({
                    scrollTop: clicked_offset - gutter
                },500);
            }
        });
    });
    // ---- ACCORDION  ---->
});

$(document).ready(function(){
    var ww = $(window).width();

    // <---- TABS  ----
    $(".s-tab_list").each(function(){
        var tab = $(this).parents(".s-tab");
        var tab_breakpoint = 768;
        var tab_check_breakpoint = $(this).parent().attr("s-tab-breakpoint");

        // Check if there is s-tab-breakpoint attribute on "s-tab" element.
        // If not, default  value is 768
        if (typeof tab_check_breakpoint !== typeof undefined && tab_check_breakpoint !== false) {
            tab_breakpoint = $(this).parent().attr("s-tab-breakpoint");
        }

        var tab_select = $("<div class='s-tab_select'><select></select></div>");
        var current = $(this);

        $(this).children("li").each(function(){
            var tab_val = $(this).children("a").text();
            var tab_option = $("<option value='"+ tab_val +"'>"+ tab_val +"</option>");

            tab_select.children("select").append(tab_option);
            tab.prepend(tab_select);
        });

        if(ww < tab_breakpoint){
            current.hide();
            current.siblings(".s-tab_select").show();
        } else {
            current.show();
            current.siblings(".s-tab_select").hide();
        }

        $(window).resize(function(){
            ww = $(window).width();

            if(ww < tab_breakpoint){
                current.hide();
                current.siblings(".s-tab_select").show();
            } else {
                current.show();
                current.siblings(".s-tab_select").hide();
            }
        });
    });

    // Add "active" class to "s-tab-content" which has equal index with "li.active"
    $(".s-tab").each(function(){
        var active_tab = $(this).find(".s-tab_list > li.active");
        var active_tab_index = active_tab.index();

        active_tab.parent().siblings(".s-tab_content").eq(active_tab_index).addClass("active");
    });

    $(".s-tab_list > li").click(function(){
        active_tab_index = $(this).index();

        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).parent().siblings(".s-tab_content").removeClass("active").eq(active_tab_index).addClass("active");
    });

    $(".s-tab_select select").change(function(){
        var select_index = $(this).children("option:selected").index();

        $(this).parents(".s-tab_select").siblings(".s-tab_content").removeClass("active").eq(select_index).addClass("active");
    });
    // ---- TABS  ---->
});

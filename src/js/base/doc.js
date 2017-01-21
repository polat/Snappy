$(document).ready(function(){
    $(document).on("scroll", onScroll);

    var scroll = $(window).scrollTop();

    // Doc menu toggle "active" class
    function onScroll(event){
        scroll = $(window).scrollTop();

        // Doc menu calc index
        var counter_li = 0;

        $(".doc_left_list > li > ul li").each(function(){
            var curr_li = $(this);
            var curr_li_index = curr_li.index();

            counter_li += 1;
            curr_li_index = counter_li;

            var refElement = $(".doc_right_counter").eq(curr_li_index);

            if (refElement.position().top -200 <= scroll && refElement.position().top + refElement.height()  > scroll) {
                $(this).siblings("li").removeClass("active");
                curr_li.addClass("active");
            } else {
                curr_li.removeClass("active");
            }
        });
    }

    // Scroll to selected section
    var section_count = $(".doc_left_list > li a").size();
    i = 0;

    $(".doc_left_list > li a, .mobile_list > li a").each(function(){
        i++;
        $(this).attr("href", "#doc_index" + (i % section_count));
    });

    $(".doc_right_counter").each(function(){
        i++;
        $(this).attr("id", "doc_index" + (i % section_count));
    });

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true
    });

    // Slidebars
    $.slidebars();

    $('.mobile_btn').on('touchstart', function (e) {
        $(this).toggleClass('is-active');
        return false;
    });

    $("#sb-site").on('touchstart', function (e){
        if($(".mobile_btn").hasClass('is-active')){
            $(".mobile_btn").removeClass('is-active');
            return false;
        }
    });

    // Mobile Menu Toggle
    $(".mobile_list li a").click(function(){
        if($(this).parent().hasClass("parent")){
            $(this).parent().siblings("li").children("ul").stop().slideUp();
            $(this).siblings("ul").stop().slideToggle();
        }
    });
});
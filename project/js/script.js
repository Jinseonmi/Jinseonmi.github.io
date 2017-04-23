$(document).ready(function() {
    $('.menu_lv1 .drop a').on('mouseenter', function(){
        $('.menu_lv2').stop().slideDown();
        $(this).addClass('on');
    });
    
    $('.menu_lv1 .drop').on('mouseleave', function(){
        $('.menu_lv2').stop().slideUp(); 
        $(this).children('a').removeClass('on');
    });
});
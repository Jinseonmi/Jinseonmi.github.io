$(document).ready(function(){
    
    // mouseenter mouseleave
    // mouseover mouseout
    // 
    $('.menu .drop a').on('mouseenter', function(){
//       $('.sub').stop().slideDown();
        // 기능구현
       /* $(this).siblings('.sub').show();    // 선택한 메뉴의 .sub만 선택
        $('.sub').animate({ top:'100%', opacity:1 });*/
        
        $(this).siblings('.sub').addClass('active');
        $(this).addClass('on');
    });
    
    $('.menu .drop').on('mouseleave', function(){
//       $('.sub').stop().slideUp(); 
        
        // 기능구현
        /*$(this).children('.sub').animate({ top:'120%', opacity:0 }, function(){
            $('.sub').hide();   // animation 실행후 hide 해주기위해
        });*/ 
        
        $(this).children('.sub').removeClass('active');
        $(this).children('a').removeClass('on');
    });
});
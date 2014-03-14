$(function(){
    $('.overlay').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('.overlay');
    if ($('body').scrollTop() > 0) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop().animate({
                height:'40px',
                position: 'fixed',
            }, 600);

            el = document.getElementById("overlay");
            el.setAttribute("style","top:0, position:fixed, z-index:5");
            
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop().animate({
                height:'100px'
            }, 600);
        }  
    }
});
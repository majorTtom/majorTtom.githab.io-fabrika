$(document).ready(function(){
    $(document).on('click', '.list', function(e){
        e.preventDefault;
        $(this).toggleClass('list__active');
    });
    
    $(document).on('click', '.sideNav__item', function(e){
        e.preventDefault;
        $('.sideNav__active').removeClass('sideNav__active');
        $(this).addClass('sideNav__active')
    });

    $(document).on('click', '.buttons__link', function(e){
        e.preventDefault;
        $('.buttons__link-active').removeClass('buttons__link-active');
        $(this).addClass('buttons__link-active') 
    });
    
     $(document).on('click', '.menu__burger', function(e){
        e.preventDefault;
        $(this).toggleClass('menu__burger-active');
        $('.sideNav').toggleClass('sideNav__burger-active');
    });
    
    $(document).on('click', '.click', function(e){
        e.preventDefault;
        $('.menu__burger').removeClass('menu__burger-active');
        $('.sideNav').removeClass('sideNav__burger-active');
    });
});



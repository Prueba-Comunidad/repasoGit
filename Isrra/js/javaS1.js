jQuery('document').ready(function($){

    var menuBtn= $('.menu-icon'),
        menu=$('.navigation ul');


    menuBtn.click(function(){
        if(menu.hasClass('show2')){
            menu.removeClass('show2');
        }else{
            menu.addClass('show2');
        }

    });

});
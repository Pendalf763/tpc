function Init(){
    if($.cookie("theme") == "light"){
        $('html').attr('theme','light');
    }
    if($.cookie("theme") == 'dark'){
        $('html').attr('theme','dark');
    }
    if($.cookie("theme") == 'dark'){
        $('.logo').attr('src','img/logo-light.svg');
    }
    if($.cookie("theme") == 'dark'){
        $('.themeIcon').attr('src','img/sun.svg');
    }
    if(!$.cookie("theme")){
        $('html').attr('theme','light');
    }
}


$(document).ready(function(){

    $('.mobileMenu').click(function(){
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

    Init();
    $('.themeSlider').click(function(){ 
        if($('html').attr('theme') == 'light'){
            $('html').attr('theme','dark');
            $('.logo').attr('src', 'img/logo-light.svg');
            $('.themeIcon').attr('src','img/sun.svg');
            $.cookie("theme",'dark');
        }
        else{
            $('html').attr('theme','light');
            $('.logo').attr('src', 'img/logo-dark.svg');
            $('.themeIcon').attr('src','img/moon.svg');
            $.cookie("theme",'light');
        }
    })

    $('.faq__item').click(function(){
        if($('.faq__right').hasClass('one')){
            $('.faq__item').not($(this)).removeClass('active')
            $('.faq__overview').not($(this).children('.faq__overview')).slideUp(300)
        }
        $(this).toggleClass('active').children('.faq__overview').slideToggle(300)
    })
 });

new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    hashNavigation: {
        watchState: true,
    },

    autoHeight: true,

    loop: true,

    spaceBetween: 100,
});
feather.replace();

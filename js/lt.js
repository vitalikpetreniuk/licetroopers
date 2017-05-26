
$(function(){

    $('.lt-tm-m > ul').dcAccordion({
        speed: 'fast',
        menuClose: true
    });

    $('.lt-cart-m button').on('click', function(){
        $('.lt-cart-open').toggleClass('open');
    });

    $('#lt-ct-ah .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('#lt-ct-ah .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('#lt-ct-ah .lt-tabs-menu li:nth-child(1) a').text();
        $('#lt-ct-ah .lt-dropdown button span').text(tText);
    });

    $('#lt-ct-ah .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('#lt-ct-ah .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('#lt-ct-ah .lt-tabs-menu li:nth-child(2) a').text();
        $('#lt-ct-ah .lt-dropdown button span').text(tText);
    });

    $('#lt-ct-la .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('#lt-ct-la .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('#lt-ct-la .lt-tabs-menu li:nth-child(1) a').text();
        $('#lt-ct-la .lt-dropdown button span').text(tText);
    });

    $('#lt-ct-la .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('#lt-ct-la .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('#lt-ct-la .lt-tabs-menu li:nth-child(2) a').text();
        $('#lt-ct-la .lt-dropdown button span').text(tText);
    });

    $('.lt-svc .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-svc .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-svc .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-svc .lt-dropdown button span').text(tText);
    });

    $('.lt-svc .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-svc .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-svc .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-svc .lt-dropdown button span').text(tText);
    });

    $('.lt-svc .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-svc .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-svc .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-svc .lt-dropdown button span').text(tText);
    });

    $('.lt-svc .lt-dropdown li:nth-child(4) a').on('click', function(){
        $('.lt-svc .lt-tabs-menu li:nth-child(4) a').trigger('click');
        var tText =  $('.lt-svc .lt-tabs-menu li:nth-child(4) a').text();
        $('.lt-svc .lt-dropdown button span').text(tText);
    });

    $('.lt-product-d .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-product-d .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-product-d .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-product-d .lt-dropdown button span').text(tText);
    });

    $('.lt-product-d .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-product-d .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-product-d .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-product-d .lt-dropdown button span').text(tText);
    });

    $('.lt-product-d .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-product-d .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-product-d .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-product-d .lt-dropdown button span').text(tText);
    });

    $('.lt-md .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-md .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-md .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-md .lt-dropdown button span').text(tText);
    });

    $('.lt-md .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-md .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-md .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-md .lt-dropdown button span').text(tText);
    });

    $('.lt-md .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-md .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-md .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-md .lt-dropdown button span').text(tText);
    });

    $('.lt-lc-in .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-lc-in .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-lc-in .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-lc-in .lt-dropdown button span').text(tText);
    });

    $('.lt-lc-in .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-lc-in .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-lc-in .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-lc-in .lt-dropdown button span').text(tText);
    });

    $('.lt-lc-in .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-lc-in .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-lc-in .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-lc-in .lt-dropdown button span').text(tText);
    });

    $('.lt-lc-in .lt-dropdown li:nth-child(4) a').on('click', function(){
        $('.lt-lc-in .lt-tabs-menu li:nth-child(4) a').trigger('click');
        var tText =  $('.lt-lc-in .lt-tabs-menu li:nth-child(4) a').text();
        $('.lt-lc-in .lt-dropdown button span').text(tText);
    });

    $('.lt-hiw .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-hiw .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-hiw .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-hiw .lt-dropdown button span').text(tText);
    });

    $('.lt-hiw .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-hiw .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-hiw .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-hiw .lt-dropdown button span').text(tText);
    });

    $('.lt-hiw .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-hiw .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-hiw .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-hiw .lt-dropdown button span').text(tText);
    });

    $('.lt-cos .lt-dropdown li:nth-child(1) a').on('click', function(){
        $('.lt-cos .lt-tabs-menu li:nth-child(1) a').trigger('click');
        var tText =  $('.lt-cos .lt-tabs-menu li:nth-child(1) a').text();
        $('.lt-cos .lt-dropdown button span').text(tText);
    });

    $('.lt-cos .lt-dropdown li:nth-child(2) a').on('click', function(){
        $('.lt-cos .lt-tabs-menu li:nth-child(2) a').trigger('click');
        var tText =  $('.lt-cos .lt-tabs-menu li:nth-child(2) a').text();
        $('.lt-cos .lt-dropdown button span').text(tText);
    });

    $('.lt-cos .lt-dropdown li:nth-child(3) a').on('click', function(){
        $('.lt-cos .lt-tabs-menu li:nth-child(3) a').trigger('click');
        var tText =  $('.lt-cos .lt-tabs-menu li:nth-child(3) a').text();
        $('.lt-cos .lt-dropdown button span').text(tText);
    });

    $('.lt-cos .lt-dropdown li:nth-child(4) a').on('click', function(){
        $('.lt-cos .lt-tabs-menu li:nth-child(4) a').trigger('click');
        var tText =  $('.lt-cos .lt-tabs-menu li:nth-child(4) a').text();
        $('.lt-cos .lt-dropdown button span').text(tText);
    });

    $('.lt-dm-s li:last-child').on('click', function(){
        $('#lt-ct-ah .lt-tabs-menu li:last-child a').trigger('click');
        var tText =  $('#lt-ct-ah .lt-tabs-menu li:last-child a').text();
        $('#lt-dm-s span').text(tText);
    });

    $('.lt-dm-s li:first-child a').on('click', function(){
        $('#lt-ct-ah .lt-tabs-menu li:first-child a').trigger('click');
        var tText =  $('#lt-ct-ah .lt-tabs-menu li:first-child a').text();
        $('#lt-dm-s span').text(tText);
    });

    $('.lt-dm-f li:last-child').on('click', function(){
        $('#lt-ct-la .lt-tabs-menu li:last-child a').trigger('click');
        var tText =  $('#lt-ct-la .lt-tabs-menu li:last-child a').text();
        $('#lt-dm-d span').text(tText);
    });

    $('.lt-dm-f li:first-child a').on('click', function(){
        $('#lt-ct-la .lt-tabs-menu li:first-child a').trigger('click');
        var tText =  $('#lt-ct-la .lt-tabs-menu li:first-child a').text();
        $('#lt-dm-d span').text(tText);
    });

    $('.lt-c-pc a').on('click', function(){
        $('#lt-ct-pm .lt-tabs-menu li:last-child a').trigger('click');
    });

    $('.lt-c-ms a').on('click', function(){
        $('#lt-ct-pm .lt-tabs-menu li:first-child a').trigger('click');
    });

    $('.lt-c-cp a').on('click', function(){
        $('#lt-ct-pf .lt-tabs-menu li:last-child a').trigger('click');
    });

    $('.lt-c-mi a').on('click', function(){
        $('#lt-ct-pf .lt-tabs-menu li:first a').trigger('click');
    });

    $('.lt-c-tabs-menu li a').on('click', function(){
        var cTitle = $(this).text();
        $('.lt-chm-in h3').text(cTitle);
        $('.lt-cabinet-in').addClass('active');
        $('.lt-c-right').addClass('active');
    });

    $('.lt-mb').on('click', function(){
        $('.lt-cabinet-in').removeClass('active');
        $('.lt-c-right').removeClass('active');
    });

    $('.lt-btn-t1').on('click', function(){
        $('.lt-co-h2 h4 a').trigger('click');
    });

    $('.lt-btn-t2').on('click', function(){
        $('.lt-co-h3 h4 a').trigger('click');
    });

    $('.dropdown-menu .lt-d1').on('click', function(){
        var dText = $(this).text();
        $('.lt-d span').text(dText);
        $('.lt-d').removeClass('lt-d2 lt-d3 lt-d4').addClass('lt-d1');
        $('.lt-shop .lt-tabs-menu li:nth-child(1) a').trigger('click');
    });

    $('.dropdown-menu .lt-d2').on('click', function(){
        var dText = $(this).text();
        $('.lt-d span').text(dText);
        $('.lt-d').removeClass('lt-d1 lt-d3 lt-d4').addClass('lt-d2');
        $('.lt-shop .lt-tabs-menu li:nth-child(2) a').trigger('click');
    });

    $('.dropdown-menu .lt-d3').on('click', function(){
        var dText = $(this).text();
        $('.lt-d span').text(dText);
        $('.lt-d').removeClass('lt-d1 lt-d2 lt-d4').addClass('lt-d3');
        $('.lt-shop .lt-tabs-menu li:nth-child(3) a').trigger('click');
    });

    $('.dropdown-menu .lt-d4').on('click', function(){
        var dText = $(this).text();
        $('.lt-d span').text(dText);
        $('.lt-d').removeClass('lt-d1 lt-d2 lt-d3').addClass('lt-d4');
        $('.lt-shop .lt-tabs-menu li:nth-child(4) a').trigger('click');
    });

    $('.lt-ln-close').on('click', function(){
        $('header').toggleClass('lt-show');
        $('.lt-header-in').toggleClass('lt-show');
        $('.lt-body').toggleClass('lt-mleft');
        $('footer').toggleClass('lt-mleft');
        $('.lt-header-m').toggleClass('lt-mleft');
        $('.lt-toggle-o').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
    });

    $('.lt-toggle').on('click', function(){
        $('header').toggleClass('lt-show');
        $('.lt-header-in').toggleClass('lt-show');
        $('.lt-body').toggleClass('lt-mleft');
        $('footer').toggleClass('lt-mleft');
        $('.lt-header-m').toggleClass('lt-mleft');
        $('.lt-toggle-o').toggleClass('lt-mleft');
        $('body').toggleClass('lt-overflow');
    });

    if($('.lt-datepicker').length)
    {
        $('.lt-datepicker').datepicker();
    }

    if($('.lt-ap-block').length)
    {
        $('.lt-ap-block').slimScroll({
            height: '340px'
        });
    }

    if($('.lt-hi-ins').length)
    {
        $('.lt-hi-ins').slimScroll({
            height: '100vh'
        });
    }

    if($('.lt-inumber').length)
    {
        $('.lt-inumber').spinner({
            min: 1
        });
    }

    if($('.lt-checkbox').length)
    {
        $('.lt-checkbox').iCheck();
    }

    if($('.lt-select').length)
    {
        $(".lt-select").selecter({
            links: false
        });
    }

    $('.lt-tslider').owlCarousel({
        margin:20,
        nav:true,
        responsive:{
            0:{
                stagePadding: 20,
                items:2
            },
            1260:{
                items:3
            }
        }
    });

    $('.lt-lslider').owlCarousel({
        nav:true,
        margin: 30,
        items: 3
    });

    $('.lt-dslider').owlCarousel({
        nav:true,
        items: 1,
        mouseDrag: false
    });

    $('.lt-dslider .owl-dots').appendTo('.lt-ds-cont .row > div');

    $('.lt-ds-pag button').on('click', function(){
        $('.lt-ds-pag button').removeClass('active');
        $(this).addClass('active');
    });

    $('.lt-open-s').on('click', function(){
        $(this).hide();
        $('.lt-search').show();
    });

    $('.lt-ds-pag div:nth-child(1) button').on('click', function(){
        $('.lt-ds-cont .owl-dot:nth-child(1)').trigger('click');
    });
    $('.lt-ds-pag div:nth-child(2) button').on('click', function(){
        $('.lt-ds-cont .owl-dot:nth-child(2)').trigger('click');
    });
    $('.lt-ds-pag div:nth-child(3) button').on('click', function(){
        $('.lt-ds-cont .owl-dot:nth-child(3)').trigger('click');
    });

    $('.lt-ds-cont .owl-dot:nth-child(1)').on('click', function(){
        $('.lt-ds-pag button').removeClass('active');
        $('.lt-ds-pag div:nth-child(1) button').addClass('active');
    });

    $('.lt-ds-cont .owl-dot:nth-child(2)').on('click', function(){
        $('.lt-ds-pag button').removeClass('active');
        $('.lt-ds-pag div:nth-child(2) button').addClass('active');
    });

    $('.lt-ds-cont .owl-dot:nth-child(3)').on('click', function(){
        $('.lt-ds-pag button').removeClass('active');
        $('.lt-ds-pag div:nth-child(3) button').addClass('active');
    });

});
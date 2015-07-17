/*jslint browser: true*/
/*global $*/
$(function () {
    
//smooth scrooling
    'use strict';
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 300, 'swing');
                //hide nav after scroll
                setTimeout(function () {
                    $('#nav').removeClass('nav-down').addClass('nav-up');
                }, 330);
                return false;
            }
        }
    });
    
// hide nav on scroll
    var lastScrollTop = 0,
        delta = 1;   // pixel move needed to trigger
    $(window).scroll(function (event) {
        var st = $(this).scrollTop(),
            scroll = $(window).scrollTop();
        
        if (scroll < 83) {
            $("#nav").addClass('nav-top');
        } else {
            $("#nav").removeClass('nav-top');
            if (st > lastScrollTop) {   // scroll down
                $("#nav").addClass('nav-bye-bye');
            } else {   // scroll up
                $("#nav").removeClass('nav-bye-bye');
            }
            lastScrollTop = st;
        }
    });
        
        
        
       
//    var lastScrollTop = 0, delta = 5;
//    $(window).scroll(function (event) {
//        var st = $(this).scrollTop(),
//            scroll = $(window).scrollTop();
//       
//        if (Math.abs(lastScrollTop - st) <= delta) {
//            return;
//        }
//        
//        if (st > lastScrollTop) {
//            // scroll down
//            $("#nav").removeClass('nav-down').addClass('nav-up');
//        } else {
//            // scroll up
//            $("#nav").removeClass('nav-up').addClass('nav-down');
//        }
//        lastScrollTop = st;
//        
//        if (scroll < 10) {
//            $("#nav").removeClass('nav-up').addClass('nav-down');
//        }
//    });
});
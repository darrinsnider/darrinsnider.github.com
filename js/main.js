/*jslint browser: true*/
/*global $*/
$(function () {

  // add class to nav when open - mobile
  $('.navbar-toggler').click(function () {
    $('.navbar').toggleClass('show');
  });

  // swap "menu" and "close" (found in HTML markup data)
  $('#menuButton').on('click', function () {
    var el = $(this);
    if (el.text() == el.data('text-swap')) {
      el.text(el.data('text-original'));
    } else {
      el.data('text-original', el.text());
      el.text(el.data('text-swap'));
    }
  });

  // close nav when li clicked
  $('#navbarSupportedContent').find('a').on('click', function () {
    $('#navbarSupportedContent').removeClass('show');
    $('.navbar').removeClass('show');
    // reset menu text from "close"
    $('#menuButton').text('menu');
  });

  // native smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  //// click to play/pause
  //    $('.vid-click').click(function () {
  //        this.paused ? this.play() : this.pause();
  //    });
});

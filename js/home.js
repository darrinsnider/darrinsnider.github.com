/*jslint browser: true*/
/*global $*/

$(function () {

  // marquee
  $('.marquee').marquee({
    //duration in milliseconds of the marquee
    duration: 70000,
    //gap in pixels between the tickers
    gap: 0,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
    startVisible: true,
  });

  // contact image hover account for tickers
  $('#contactTickers').hover(function () {
    $('#contactImage').addClass('hover');
  }, function () {
    $('#contactImage').removeClass('hover');
  });

  $('#contactImage').hover(function () {
    $('#contactTickers').addClass('hover');
  }, function () {
    $('#contactTickers').removeClass('hover');
  });

  // lottie animations
  lottie.loadAnimation({
    container: document.getElementById('lottieSkill1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/img/home/skill-1.json'
  });

  lottie.loadAnimation({
    container: document.getElementById('lottieSkill2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/img/home/skill-2.json'
  });

  lottie.loadAnimation({
    container: document.getElementById('lottieSkill3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/img/home/skill-3.json'
  });

});

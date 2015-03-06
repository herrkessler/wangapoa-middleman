$(document).ready(function(){

  var navButton = $('#main-navigation-icon'),
      navWrapper = $('#main-navigation-modal'),
      body = $('body');

  navButton.on('click', function(event){
    if ($(this).hasClass('js-active')){
      $(this).removeClass('js-active');
      navWrapper.removeClass('active');
      body.removeClass('nav-active');
    } else {
      $(this).addClass('js-active');
      navWrapper.addClass('active');
      body.addClass('nav-active');
    }
  });
});
(function() {
  'use strict';

  $('.category-list-container > a, .tag-list-container > a').click(function(e){
    $(this).next().slideToggle('fast');
  });

  $('.sidebar-toggle').click(function(e){
    $('.sidebar').toggleClass('in');
  });

  $('.main-content').click(function(e){
    $('.sidebar').removeClass('in');
  });
})();

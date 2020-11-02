jQuery(document).ready(function ($) {
  $('body').on('click', '.header_right_search_m', function() {
    $(this).toggleClass('cliked');
    $('#searchField').focus();

  });
  $( "#searchField" ).blur(function() {
    $('.header_right_search_m').removeClass('cliked');
    $('#searchField').val('');
  });

  $('body').on('click', '.header_right_menu_m', function() {
    $('body').toggleClass('noscroll');
    $('.header_m').toggleClass('menu_visible');
  });

  function activeItem(itemClassName, activeClassName) {

    $('body').on('click', itemClassName, function() {

      $(itemClassName).removeClass(activeClassName);
      $(this).addClass(activeClassName);
    });

  }
  activeItem('.menu_item', 'active');

});

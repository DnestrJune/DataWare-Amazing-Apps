jQuery(document).ready(function ($) {
  setTimeout(function(){
		$('body').addClass('run_animations');
	},500);


  function isMobile() {

  var a = (navigator.userAgent||navigator.vendor||window.opera);
      if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
      return true;
      }

  return false;
  }

  if(isMobile() === true) {
      window.location  = 'index_m.html';
  }


  function activeItem(itemClassName, activeClassName) {
    $('body').on('click', itemClassName, function() {

      $(itemClassName).removeClass(activeClassName);
      $(this).addClass(activeClassName);
    });
  }
  activeItem('.header_content_item', 'active');
  activeItem('.slider_pagination_item', 'active');

  //search field
  $('body').on('click', '.header_seacrh_ico', function() {
    $(this).addClass('cliked');
    $('#searchField').focus();
  });

  $( "#searchField" ).blur(function() {
    $('.header_seacrh_ico').removeClass('cliked');
  });


  // change slide
  $('body').on('click', '.slider_pagination_item', function() {
    $('.slider_pagination_item').removeClass('active');
    $(this).addClass('active');

    var dotIndex = $(this).attr('data-dot');
    var slideIndex = $("div").find("[data-slide='" + dotIndex + "']");

    $('.slider_content_wr').removeClass('active');
    slideIndex.addClass('active');
  });



  // show popup
  $('body').on('click', '.header_popup_btn_wr', function() {
    $('body').addClass('noscroll');
    $('.popup_wrap').addClass('visible');
  });
  $('body').on('click', '.popup_bg', function() {
    $('body').removeClass('noscroll');
    $('.popup_wrap').removeClass('visible');
    $('form').trigger('reset');
  });

  // popup form
  $('.popup_send_btn ').click(function(){
		var name = $('#popupName').val();
		var email = $('#popupEmail').val();
    var web = $('#popupWeb').val();

    var emailValidation = new RegExp('^[@]$');


		if (name != '' && email && emailValidation.test(email) !='' && web != '') {
      $('body').removeClass('noscroll');
      $('.popup_wrap').removeClass('visible');
      setTimeout(function(){
        $('form').trigger('reset');
      }, 500);
		} else {
			if(name == '') {
				$('#popupName').parent('.popup_input').addClass('important_input');
				setTimeout(function(){
					$('.popup_input').removeClass('important_input');
				}, 1500);
			}

			if(email == '') {
				$('#popupEmail').parent('.popup_input').addClass('important_input');
				setTimeout(function(){
					$('.popup_input').removeClass('important_input');
				}, 1500);
			}
			if(email != '' && !emailValidation.test(email)){
        console.log("Введите корректный email");
				$('#popupEmail').parent('.popup_input').addClass('important_input correct_email');
				setTimeout(function(){
					$('.popup_input').removeClass('important_input correct_email');
				}, 1500);
			}

      if(web == '') {
				$('#popupWeb').parent('.popup_input').addClass('important_input');
				setTimeout(function(){
					$('.popup_input').removeClass('important_input');
				}, 1500);
			}

		}
	});

});

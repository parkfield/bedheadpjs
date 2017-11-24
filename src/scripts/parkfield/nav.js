$('document').ready(function(){
  //Hides the CartCount in Header if Zero
  if(parseInt($('#CartLink span').text())== 0){
    $('#CartLink span').hide();
  }
  $('.desktop-search-icon').click(function(){
    $('.search-container').toggleClass('active');
  });
});

$('.theme-nav-main-standard .dropdown').each(function(index){
  var dropdownMenu = $(this).find('.dropdown_menu_container .dropdown_menu');
  dropdownMenu.slick({
    slidesToShow: 6,
    arrows: true,
    autoplay: false,
    prevArrow: '.theme-nav-main-standard .dropdown-'+index+' .slider-container .prev',
    nextArrow: '.theme-nav-main-standard .dropdown-'+index+' .slider-container .next'
  });
  $(this).find('.nav-link').hover(function(){
    dropdownMenu.get(0).slick.setPosition(0);
  });
});

$('.theme-nav-main-sticky .dropdown').each(function(index){
  var dropdownMenu = $(this).find('.dropdown_menu_container .dropdown_menu');
  dropdownMenu.slick({
    slidesToShow: 6,
    arrows: true,
    autoplay: false,
    prevArrow: '.theme-nav-main-sticky .dropdown-'+index+' .slider-container .prev',
    nextArrow: '.theme-nav-main-sticky .dropdown-'+index+' .slider-container .next'
  });
  $(this).find('.nav-link').hover(function(){
    dropdownMenu.get(0).slick.setPosition(0);
  });
});

/* Sticky Nav Scroll */
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if($(window).width() < 800){
      if(scroll > 180){
        $('.theme-header').addClass('hide');
      }else{
        $('.theme-header').removeClass('hide');
      }
      if(scroll > 200){
        $('.theme-header').addClass('fixed');
      }else{
        $('.theme-header').removeClass('fixed');
      }
      if(scroll > 220){
        $('.theme-header').addClass('show');
      }else{
        $('.theme-header').removeClass('show');
      }
    }else{
      if(scroll > 380){
        $('.theme-header').addClass('hide');
      }else{
        $('.theme-header').removeClass('hide');
      }
      if(scroll > 420){
        $('body').css('padding-top','200px');
        $('.theme-header').addClass('fixed');
      }else{
        $('body').css('padding-top','0px');
        $('.theme-header').removeClass('fixed');
      }
      if(scroll > 430){
        $('.theme-header').addClass('show');
      }else{
        $('.theme-header').removeClass('show');
      }
    }
});
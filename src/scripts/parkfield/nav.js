$('document').ready(function(){
  //Hides the CartCount in Header if Zero
  if(parseInt($('#CartLink span').text())== 0){
    $('#CartLink span').hide();
  }
  $('.desktop-search-icon').click(function(){
    $('.search-container').toggleClass('active');
  });
});

$('.theme-nav-main .dropdown').each(function(index){
  var dropdownMenu = $(this).find('.dropdown_menu_container .dropdown_menu');
  dropdownMenu.slick({
    slidesToShow: 6,
    arrows: true,
    autoplay: false,
    prevArrow: '.dropdown-'+index+' .slider-container .prev',
    nextArrow: '.dropdown-'+index+' .slider-container .next'
  });
  $(this).find('.nav-link').hover(function(){
    dropdownMenu.get(0).slick.setPosition(0);
  });
});
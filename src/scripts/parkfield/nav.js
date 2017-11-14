$('document').ready(function(){
  //Hides the CartCount in Header if Zero
  if(parseInt($('#CartLink span').text())== 0){
    $('#CartLink span').hide();
  }
  $('.desktop-search-icon').click(function(){
    $('.search-container').toggleClass('active');
  });
});
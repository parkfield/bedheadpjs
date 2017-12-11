//Toggle Forgot Password on Login/Register Pages
$('a[href="#forgotPassword"]').click(function(e){
  e.preventDefault();
  $('form[action="/account/recover"]').toggle();
});


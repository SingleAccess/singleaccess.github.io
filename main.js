$(document).ready(function () {

  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    event.preventDefault();
    register($form);

  function register($form) {
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
      cache       : false,
      dataType    : 'jsonp',
      jsonp: "c",
      contentType: "application/json; charset=utf-8",
      error       : function(err) { $('#notification_container').html('<span class="alert">Something has gone wrong, please try again!</span>'); },
      success     : function(data) {
        if (data.result === "success") {
          $('#notification_container').html('<p class="success-div">'+"Thank you for providing us with your details. We'll keep you informed!"+'</p>');
          $('.bold-text').css("display", "none");
          $('#mc_embed_signup').css("display", "none");
          $('#side-note').css("display", "none");
        } else {
          $('#notification_container').html('<p class="fail-div">'+"Something has gone wrong, please try again!"+'</p>');
        }
      }
    });
  }

  });
});

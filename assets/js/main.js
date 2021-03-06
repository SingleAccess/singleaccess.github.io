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
      error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
      success     : function(data) {
        if (data.result === "success") {
          $('#notification_container').html("<p class='success-div bold-text'>"+"Thank you for providing us with your details. We'll keep you informed!"+"</p>");
          $('.get-details').css("display", "none");
          $('#mc_embed_signup').css("display", "none");
          $('#side-note').css("display", "none");
        } else {
          var message = data.msg.substring(4);
          $('#notification_container').html("<p class='fail-div bold-text'>"+message+"</p>");
        }
      }
    });
  }

  });
});
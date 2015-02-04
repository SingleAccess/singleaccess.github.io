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
      // crossDomain: true,
      contentType: "application/json; charset=utf-8",
      error       : function(err) { $('#notification_container').html('<span class="alert">FUCK YOU MAILCHIMP</span>'); },
      success     : function(data) {
        console.log(data);
        if (data.result === "success") {
          $('#notification_container').html('<span class="success">'+"SUCCESSSSSS"+'</span>');

        }
        // if (data.result != "success") {
        //   var message = data.msg.substring(4);
        //   $('#notification_container').html('<span class="alert">'+HELLPPPPPPPPPPPPPPPP+'</span>');
        // } else {
        //   var message = data.msg;

        //   $('#notification_container').html('<span class="success">'+message+'</span>');
        // }
      }
    });
  }

  });
});

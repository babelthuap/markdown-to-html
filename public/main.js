'use strict';

$(document).ready(() => {
  
  $('#convert').click(convert);

  function convert() {
    let md = $('#md').val();

    $.post('/markdown', {string: md})
    .done(displayHTML)
    .fail((err) => console.log("ERROR:", err));
  }

  function displayHTML(data) {
    $('#rendered').text(data);
  }

});

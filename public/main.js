'use strict';

$(document).ready(() => {

  $('#convert').click(convert);
  $('#md').on('keydown', debounce);

  function convert() {
    let md = $('#md').val();

    $.post('/markdown', {string: md})
    .done(displayHTML)
    .fail((err) => console.log("ERROR:", err));
  }

  function displayHTML(data) {
    let html = $.parseHTML(data);
    $('#rendered').empty().append(html);
  }

  function debounce() {
    $('#md').off();
    setTimeout(() => {
      convert();
      $('#md').on('keydown', debounce);
    }, 1000)
  }

});

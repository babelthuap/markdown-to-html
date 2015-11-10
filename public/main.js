'use strict';

$(document).ready(() => {

  $('#convert').click(convert);
  $('#md').on('keypress', debounce);

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
      $('#md').on('keypress', debounce);
    }, 1000)
  }

});

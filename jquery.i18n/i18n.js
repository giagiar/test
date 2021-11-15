jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
    $('#messages').text($.i18n('message_from', 'Ann', 2, 'female'));
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load('jquery.i18n/languages/' + i18n.locale + '.json', i18n.locale);

  update_texts();
});
jQuery(document).ready(function() {
    
    $.i18n().locale = 'zh';
    
    function update_texts() {

        $('body').i18n();
        // $('#messages').text($.i18n('message_from', 'Ann', 2, 'female'));
    };


    
  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

    
  $.i18n().load({
      en:'jquery.i18n/languages/en.json',
      zh:'jquery.i18n/languages/zh.json'
  });

  update_texts();
});
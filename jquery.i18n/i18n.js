jQuery(document).ready(function() {
    
   
    var lang = Cookies.get('language');
    console.log(lang+" cookie");
    
    if (lang == null){
        lang = "zh"; 
        Cookies.set( 'language' , 'zh');
        console.log("null");
    }
    else ;

         
    $.i18n().load({ 
      en:'jquery.i18n/languages/en.json',
      zh:'jquery.i18n/languages/zh.json'
    }).done( function() { update_texts(lang); } );

    function update_texts(lang) {
        $.i18n().locale = lang;
        $('body').i18n();
        console.log(lang);
        // $('#messages').text($.i18n('message_from', 'Ann', 2, 'female'));
    };


    
    $('.lang-switch').click(function(e) {
        if (lang == 'zh') {lang ='en';}
        else {lang = 'zh';}
        e.preventDefault();
        Cookies.set( 'language' , lang);
        update_texts(lang);
    });


  update_texts(lang);
});
jQuery(document).ready(function() {
    
   
    var lang = Cookies.get('language');
    
    if (lang != "en"){
        lang = "zh"; 
        Cookies.set( 'language' , 'zh');
    }
    else ;

         
    $.i18n().load({ 
        
      en:'languages/en.json',
      zh:'languages/zh.json',  
        
    }).done( function() { update_texts(lang); } );
    


    function update_texts(lang) {
        $.i18n().locale = lang;
        $('body').i18n();

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
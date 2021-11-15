function updateText() {
    $('body').i18n();
    
}


jQuery( document ).ready( function ( ) {
    
    $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    updateText();
    });
    
	$.i18n().load( {
	'en': {
		'message-hello': 'Hello World',
        'welcome': 'Welcome-T',
		'message-goodbye': 'Good bye'	},
	'zh': './languages/zh.json', // Messages for Mandarin

    } );
    
    updateText();
    
} );

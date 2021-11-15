function updateText() {
    $.i18n().load( {
	en: {
		'message-hello': 'Hello World',
		'message-goodbye': 'Good bye'	},
	zh: './languages/zh.json', // Messages for Mandarin

    } );
}


$( document ).ready( function ( $ ) {
	'use strict';
	updateText();
} );

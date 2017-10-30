$( function () {
	$('#fullpage').fullpage( {
		anchors:['page1','page2','page3','page4','page5','page6'],
		menu:'#menu',
		afterLoad: function (anchorLink , index) {
			if(index ==1 ) {
				$('.nav').removeAttr('id');
			}else {
				$('.nav').attr('id','tp')
			};
			
		}
	} );
} )
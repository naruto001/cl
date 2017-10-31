$( function () {
	$('#fullpage').fullpage( {
		anchors:['page1','page2','page3','page4','page5','page6'],
		menu:'#menu',

		//滚动到某一屏后的回调函数，
		//接收 anchorLink 和 index 两个参数，
		//anchorLink 是锚链接的名称，
		//index 是序号，从1开始计算
		afterLoad: function (anchorLink , index) {
			if(index ==1 ) {
				$('.nav').removeAttr('id');
			}else {
				$('.nav').attr('id','tp')
			};
			
		}
	} );

	//轮播图
	$('.slide_pic').slide({
		titCell:".hd ul li",
		mainCell:".bd ul",
		mouseOverStop:true,
		effect:"fold",
		trigger:"mouseover",
		autoPlay:true,
		interTime:5000,
		delayTime:300
	})
} )
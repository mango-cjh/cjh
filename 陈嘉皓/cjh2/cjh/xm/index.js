// 轮播图
	$(".banner1").banner({
		aimg:$(".banner1").find("img"),			
		isList:false,				
		autoPlay:true,			
		index:0
	})


// 楼层
	$("#louceng ul").children("li").click(function(){     
		var index1=$(this).index();
		var isNowFloor1=$(".floors").eq(index1);
		var t1=isNowFloor1.offset().top;
		$("html").stop().animate({
				scrollTop:t1
		})
})

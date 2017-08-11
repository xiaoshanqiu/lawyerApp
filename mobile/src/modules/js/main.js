var banner = {
	init:function(){
		require(['jquery','swiper'],function($,swiper){
			$(function(){ 
				var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    
			    // 分页器
			    pagination: '.swiper-pagination',
			   
			  })        
			})
		})
	}
}

exports.banner = banner;
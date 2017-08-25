define('modules/js/main', function(require, exports, module) {

  'use strict';
  
  var banner = {
  	init: function init() {
  		require(['modules/js/jquery','modules/js/swiper'], function ($, swiper) {
  			$(function () {
  				var mySwiper = new Swiper('.swiper-container', {
  					loop: true,
  
  					// 分页器
  					pagination: '.swiper-pagination'
  
  				});
  			});
  		});
  	}
  };
  
  exports.banner = banner;

});

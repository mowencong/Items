$(function(){
			
			var $zhibo_indLi = $('.content_1 inner .zhibo_ind li');
			var $zhibo_listLi = $('.content_1 inner .class="cover li');
			var $btn = $('.content_1 inner .btn');
			var $btnA = $('.content_1 inner .zhibo_btn a');
			var $lunbo = $('.content_1 inner');
			var index = 0;
			var timer;

			$zhibo_indL.hover(function(){
				index = $(this).index();
				fn();
			});

			$content_1 inner.hover(function(){
				$zhibo_btn.show();
				clearInterval(timer);
			},function(){
				$zhibo_btn.hide();
				auto();
			});

			$btnA.click(function(){
				var i = $(this).index();
				if ( i )
				{
					index ++;
					index %= $zhibo_indLi.length;
				}
				else
				{
					index --;
					if(index<0)index = $zhibo_indLi.length-1;
				}
				fn();
			}).mousedown(function(){
				return false;
			});
			
			auto();
			function auto(){
				timer = setInterval(function(){
					index ++;
					index %= $zhibo_indLi.length;
					fn();
				},1000);
			}
			function fn(){
				$zhibo_indLi.eq(index).addClass('active').siblings().removeClass('active');
				$zhibo_listLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
			}
		});
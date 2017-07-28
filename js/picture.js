$(function(){
			
			var $lb_navLi = $('.lunbo .lb_nav li');
			var $lbLi = $('.lunbo .lb li');
			var $btn = $('.lunbo .btn');
			var $btnDiv = $('.lunbo .btn div');
			var $lunbo = $('.lunbo');
			var index = 0;
			var timer;

			$lb_navLi.hover(function(){
				index = $(this).index();
				fn();
			});

			$lunbo.hover(function(){
				$btn.show();
				clearInterval(timer);
			},function(){
				$btn.hide();
				auto();
			});

			$btnDiv.click(function(){
				var i = $(this).index();
				if ( i )
				{
					index ++;
					index %= $lb_navLi.length;
				}
				else
				{
					index --;
					if(index<0)index = $lb_navLi.length-1;
				}
				fn();
			}).mousedown(function(){
				return false;
			});
			
			auto();
			function auto(){
				timer = setInterval(function(){
					index ++;
					index %= $lb_navLi.length;
					fn();
				},1000);
			}
			function fn(){
				$lb_navLi.eq(index).addClass('active').siblings().removeClass('active');
				$lbLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
			}
		});
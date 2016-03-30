$(function(){
	$('.top').css({height:$(window).height()});
	$('.css3').css({height:$(window).height()});
	$('.js').css({height:$(window).height()});
	var $Pro=$('.top_p2')[0];
	var n=0;
	/*$Pro.style.transform='rotate(120deg)'*/
	setInterval(function(){
		n-=10;
		$Pro.style.transform='rotate('+n+'deg)';
	},30)
	var $body=$('body');
	var abs=0;
	var lasttime = new Date();
	var $Count=$('.top_count p')
	//var lasts=lasttime.getMilliseconds();
	$(document).on('mousewheel DOMMouseScroll',function(e){
		$('.top').css({height:$(window).height()});
		$('.css3').css({height:$(window).height()});
		$('.js').css({height:$(window).height()});
		var newtime = new Date();
		if(Math.abs(newtime.getSeconds()-lasttime.getSeconds())<1) return;
		var date=(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta>0?1:-1)) || (e.originalEvent.Detail && (e.originalEvent.Datail>0?-1:1));
		if (date>0) {
			abs--;
			if (abs<0) {
				abs=0;
				return;
			};
			var t=null;
			clearTimeout(t);
			setTimeout(function(){
				tab($('.top_tab div'),$('.top_tab div').eq(abs));
				$body.stop().animate({top:-abs*$(window).height()},800);
			},800)
			if (abs==0) {
				$('.css3_count').css('transition','1s all ease');
				$('.css3_count').css({transform:'translate(-50px,0px)',opacity:0});
				var tim=null;
				clearTimeout(tim);
				tim=setTimeout(function(){
					$('.top_div div').css('transition','1.5s all ease');
					$('.top_div div').css({transform:'translate(0px,0px)',opacity:1});
					$Count.css('transition','1.5s all ease');
					$Count.css({transform:'translate(0px,0px)',opacity:1});
				},800)	
			}
			if (abs==1) {
				var tim=null;
				clearTimeout(tim);
				tim=setTimeout(function(){
					$('.css3_count').css('transition','1.5s all ease');
					$('.css3_count').css({transform:'translate(0px,0px)',opacity:1});
				},1500)	
			}
		}else{	
			abs++;
			if (abs>3) {
				abs=3;
				return;
			};
			var timer=null;
			clearTimeout(timer);
			timer=setTimeout(function(){
				tab($('.top_tab div'),$('.top_tab div').eq(abs));
				$body.stop().animate({top:-abs*$(window).height()},800);
				if (abs==1) {
					var ti=null;
					clearTimeout(ti);
					ti=setTimeout(function(){
						$('.css3_count').css('transition','1s all ease');
						$('.css3_count').css({transform:'translate(0px,0px)',opacity:1});
					},500)
				}
			},1000)
			if (abs==1) {
				$('.top_div div').css('transition','1s all ease');
				$('.top_div div').css({transform:'translate(-200px,-200px)',opacity:0});
				$Count.css('transition','1.5s all ease');
				$Count.css({transform:'translate(0px,100px)',opacity:0});
			};
			if (abs==2) {
				$('.css3_count').css('transition','1s all ease');
				$('.css3_count').css({transform:'translate(-50px,0px)',opacity:0});
			};
		}
		lasttime = new Date();
		return false;
	});
	$('.top_tab div').click(function(){
		abs=$(this).index();
		tab($('.top_tab div'),$(this));
		$body.stop().animate({top:-abs*$(window).height()},800);
		if (abs==0) {
			var tim=null;
			clearTimeout(tim);
			tim=setTimeout(function(){
				$('.top_div div').css('transition','1.5s all ease');
				$('.top_div div').css({transform:'translate(0px,0px)',opacity:1});
				$Count.css('transition','1.5s all ease');
				$Count.css({transform:'translate(0px,0px)',opacity:1});
			},800)	
		}
	})
	function tab(obj1,obj2){
		obj1.removeClass('show');
		obj2.find('span').css({transition:'1s all ease'});
		obj1.find('span').css({display:'none',opacity:0});
		$this=obj2;
		var timer=null;
		clearTimeout(timer);
		setTimeout(function(){
			$this.find('span').css({display:'block',opacity:1});
		},1000)
		obj2.css({transition:'1s all ease'}).addClass('show');
	}
	var $zuop=$('.js_cd')
	var lo=true;
	$('.js_left').click(function(){
		$zuop.css({transition:'1.5s all ease'})
		if (lo) {
			$('.js_one').css({transition:'1s all ease',opacity:0})
			$('.js_tow').css({transition:'1s all ease',opacity:1})
			$zuop.css({left:-$('.js_zuop').width()});
			lo=false;
		}else{
			$('.js_one').css({transition:'1s all ease',opacity:1})
			$('.js_tow').css({transition:'1s all ease',opacity:0})
			$zuop.css({left:0});
			lo=true;
		}
	})
	$('.js_right').click(function(){
		$zuop.css({transition:'1.5s all ease'})
		if (!lo) {
			$('.js_one').css({transition:'1s all ease',opacity:1})
			$('.js_tow').css({transition:'1s all ease',opacity:0})
			$zuop.css({left:0});
			lo=true;
		}else{
			$('.js_one').css({transition:'1s all ease',opacity:0})
			$('.js_tow').css({transition:'1s all ease',opacity:1})
			$zuop.css({left:-$('.js_zuop').width()});
			lo=false;
		}
	})
	var gl=0;
	var $xuan=$('.css_xuan')[0];
	/*$xuan.style.transform='rotate(60deg)'*/
	setInterval(function(){
		gl-=10;
		$xuan.style.transform='rotate('+gl+'deg)'
	},30)
})
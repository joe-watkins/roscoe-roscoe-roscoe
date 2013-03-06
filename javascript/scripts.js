head.ready(function() {
 "use strict";

	var Engine = {
		utils : {
			mails : function(){
				$('a[href^="mailto:"]').each(function(){
					var 
						mail = $(this).attr('href').replace('mailto:',''),
						replaced = mail.replace('/at/','@');
					$(this).attr('href','mailto:' + replaced);
					if($(this).text() === mail) {
						$(this).text(replaced);
					}
				});

			}
		},
		tweaks : {
		
			responsiveIframe : function(itemWrapper){

				if($(itemWrapper).size() === 0){return;}
			   
				// on resize for fun
				$(window).resize(function() {
				  var parentWidth = $(itemWrapper).width();
				  $(itemWrapper+' iframe').each(function(){
					$(this).attr('style', 'border: medium none; overflow: hidden; width: ' + parentWidth +  'px');
				  });
				});
			   
				// onload
				$(window).load(function() {
					var parentWidth = $(itemWrapper).width();
					$(itemWrapper+' iframe').each(function(){
						$(this).attr('style', 'border: medium none; overflow: hidden; width: ' + parentWidth +  'px');
					});
				});
			   
			}, // responsiveIframe
			
			flipShow : function(){
				// for header flip feature
				if($("#fc-slideshow").size() === 0){return;}
				
				$("#fc-slideshow").flipshow({
					// default transition speed (ms)
				    speed : 700,
				    // default transition easing
				    easing : 'cubic-bezier(.29,1.44,.86,1.06)'
				});
				
			}, // flipShow
			
			masonryGallery : function(){
				// for gallery functionality on resize
				$('.gallery-a').masonry({
				  itemSelector: 'li',
				  columnWidth: 240,
				  isAnimated: true,
				  animationOptions: {
				    duration: 350,
				    easing: 'linear',
				    queue: false
				  }
				});
			},
			
			toTop : function(){
				// for scroll to top feature
				$().UItoTop({ easingType: 'easeOutQuart' });
			},
			fancyboxTitles : function(){
				/*	
					Adds title data attribute to parent anchor 
					element so that screen reader does not read alt
					and title attribute twice
				*/
					
				$('a[data-fancybox-group]').each(function() {
				    var alt = $(this).find("img").attr("alt");
				    $(this).attr("data-fancybox-title",alt);
				});
			}, 
			fancybox : function(){
				// for fancybox gallery
				$(".gallery-a a").fancybox({
					prevEffect	: 'none',
					nextEffect	: 'none',
					openEffect  : 'elastic',
					closeEffect : 'elastic'
				});
			
				$("a.fancybox").fancybox({
					prevEffect	: 'none',
					nextEffect	: 'none'
				});
			
				$("a.fancybox-movie").fancybox({
					'width'				: '640px',
					'height'			: '480px',
					'autoScale'			: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
				
			}

	
		} // tweaks
	};


	Engine.utils.mails();
	Engine.tweaks.responsiveIframe(".video-wrapper");
	Engine.tweaks.flipShow();
	Engine.tweaks.masonryGallery();
	Engine.tweaks.toTop();
	Engine.tweaks.fancyboxTitles();
	Engine.tweaks.fancybox();

});
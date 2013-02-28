/*!
 * Scripts
 *
 */
head.ready(function() {
 "use strict";

	var Engine = {
		utils : {
			links : function(){
				$('a[rel*="external"]').click(function(e){
					e.preventDefault();
					window.open($(this).attr('href'));
				});
			},
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

			},
			labels : function(){
				$('#subscribe-a label').compactize();
			}
		},
		ui : {
			faq : function(){
				$('section.faq-a li > a').click(function(e){
					e.preventDefault();
					$(this).toggleClass('active');
					$(this).next('div.answer').toggle();
				});
			}
		},
		tweaks : {
		
			fancybox : function(){
			
				$('a.fancybox, a.fire-video-1').fancybox({
					overlayColor: '#000',
					overlayOpacity: .8
				});
				
				
				$('a.fancyframe').each(function(){
					 var width      = 940;
					 var height      = 450;
					 var classes = $(this).attr('class');
			
					 var widths = classes.match(/w(\d+)/);
					 var heights = classes.match(/h(\d+)/);
			
					 if(widths != null) width = parseInt(widths[1]);
					 if(heights != null) height = parseInt(heights[1]);
			
					 $(this).addClass('iframe').fancybox({
						  width: width,
						  height: height,
						  padding: 10,
						  titleShow : false,
						  overlayColor: '#000',
						  overlayOpacity: .9,
						  autoDimensions: false,
						  centerOnScroll: true,
						  showNavArrows: false
					 })
				});
			}, // fancybox
			
			responsiveGoogleMap : function(itemWrapper){

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
			   
			}, // responsiveGoogleMap
			
			flipShow : function(){
			
				if($("#fc-slideshow").size() === 0){return;}
				
				$("#fc-slideshow").flipshow();
				
			} // flipShow
	
		} // tweaks
	};

	Engine.utils.links();
	Engine.utils.mails();
	Engine.utils.labels();
	
	Engine.ui.faq();

	
	Engine.tweaks.fancybox();
	Engine.tweaks.responsiveGoogleMap(".box-a.contact-a");
	
	Engine.tweaks.flipShow();

	
	
});
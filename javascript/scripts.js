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

	
	Engine.ui.faq();

	Engine.tweaks.responsiveGoogleMap(".box-a.contact-a");
	
	Engine.tweaks.flipShow();

	
	
});
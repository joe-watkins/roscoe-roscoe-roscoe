/*!
 * Scripts
 *
 */head.ready(function(){"use strict";var e={utils:{links:function(){$('a[rel*="external"]').click(function(e){e.preventDefault();window.open($(this).attr("href"))})},mails:function(){$('a[href^="mailto:"]').each(function(){var e=$(this).attr("href").replace("mailto:",""),t=e.replace("/at/","@");$(this).attr("href","mailto:"+t);$(this).text()===e&&$(this).text(t)})},labels:function(){$("#subscribe-a label").compactize()}},ui:{faq:function(){$("section.faq-a li > a").click(function(e){e.preventDefault();$(this).toggleClass("active");$(this).next("div.answer").toggle()})}},tweaks:{fancybox:function(){$("a.fancybox, a.fire-video-1").fancybox({overlayColor:"#000",overlayOpacity:.8});$("a.fancyframe").each(function(){var e=940,t=450,n=$(this).attr("class"),r=n.match(/w(\d+)/),i=n.match(/h(\d+)/);r!=null&&(e=parseInt(r[1]));i!=null&&(t=parseInt(i[1]));$(this).addClass("iframe").fancybox({width:e,height:t,padding:10,titleShow:!1,overlayColor:"#000",overlayOpacity:.9,autoDimensions:!1,centerOnScroll:!0,showNavArrows:!1})})},responsiveGoogleMap:function(e){if($(e).size()===0)return;$(window).resize(function(){var t=$(e).width();$(e+" iframe").each(function(){$(this).attr("style","border: medium none; overflow: hidden; width: "+t+"px")})});$(window).load(function(){var t=$(e).width();$(e+" iframe").each(function(){$(this).attr("style","border: medium none; overflow: hidden; width: "+t+"px")})})}}};e.utils.links();e.utils.mails();e.utils.labels();e.ui.faq();e.tweaks.fancybox();e.tweaks.responsiveGoogleMap(".box-a.contact-a")});
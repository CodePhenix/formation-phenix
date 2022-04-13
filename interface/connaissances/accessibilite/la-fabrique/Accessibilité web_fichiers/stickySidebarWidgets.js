jQuery(document).ready(function($)
{var catcher=$(scriptVars.catcherID);var sticky=$(scriptVars.stickyID);var widthSelector=(typeof scriptVars.widthSelector!=='undefined')?scriptVars.widthSelector:'#sidebar';var footer=$('footer.site-footer');var viewportWidth=$(window).width();$(window).scroll(function()
{if(viewportWidth>1000)
{if((isScrolledTo(sticky)|!isScrolledTo(footer)))
{var fromTop=$('.site-header').hasClass('sticky')?$('header.sticky').height()+15:15;sticky.css('position','fixed');sticky.css('top',fromTop+'px');sticky.css('width',$(widthSelector).width());if(typeof scriptVars.isOffer!=='undefined'&&scriptVars.isOffer==1)
sticky.removeClass('fdn-hidden');}
var topStopHeight=catcher.offset().top+catcher.height()+100;if(topStopHeight>sticky.offset().top)
{sticky.css('position','absolute');sticky.css('top',topStopHeight);if(typeof scriptVars.isOffer!=='undefined'&&scriptVars.isOffer==1)
sticky.addClass('fdn-hidden');}
var bottomStopHeight=footer.offset().top;if(bottomStopHeight<sticky.offset().top+sticky.height()+125)
{sticky.css('position','absolute');sticky.css('top',bottomStopHeight-sticky.outerHeight()-60);}}});function isScrolledTo(elem)
{var docViewTop=$(window).scrollTop();var elemTop=$(elem).offset().top;return((elemTop<=docViewTop));}});
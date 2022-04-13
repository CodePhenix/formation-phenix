/*!
 *  WordPress Simple Survey JavaScript Library v3.0.0
 *
 *  @version 3.0.1
 *  @copyright 2012, 2013, 2014, SAI Digital
 *  @author Richard Royal
 *  @license see EULA
 */
(function($){$.fn.WP_Simple_Survey=function(args){var wpss=$(this);var current=1;var quiz_id=$(this).data('quiz-id');var wpss_id="#wpss_quiz_"+quiz_id;var context=$(wpss_id);var question_count=parseInt($(this).data('question-count'));var answered_panels=[]
$(".wpss_next",context).click(function(e){e.preventDefault();if(!$(this).hasClass('wpss_disabled')&&!$(this).hasClass('wpss-fields-panel')){panel='.wpss_panel_'.concat(current);$(panel,context).fadeTo(0,1).hide(0);current+=1;panel='.wpss_panel_'.concat(current);$(panel,context).fadeIn('fast');$(".wpss_back",context).removeAttr("disabled").removeClass('wpss_disabled');if($(panel,context).hasClass('wpss-fields-panel')){$(".wpss_next",context).attr("disabled","disabled").addClass('wpss_disabled')}else{if($.inArray(panel,answered_panels)<1){$(".wpss_next",context).attr("disabled","disabled").addClass('wpss_disabled')}}
$(".wpss-progress-bar span",context).css('width',100*(current-1)/question_count+'%')}});$(".wpss_back",context).click(function(e){e.preventDefault();if(!$(this).hasClass('wpss_disabled')){panel='.wpss_panel_'.concat(current);$(panel,context).fadeTo(0,1).hide(0);current-=1;panel='.wpss_panel_'.concat(current);$(panel,context).fadeIn('fast');$(".wpss_next",wpss).removeAttr("disabled").removeClass('wpss_disabled');if(current<=1){$(".wpss_back",context).attr("disabled","disabled").addClass('wpss_disabled');current=1}
$(".wpss-progress-bar span",context).css('width',100*(current-1)/question_count+'%')}});$("input[type='radio'], input[type='checkbox'], select",context).change(function(){panel='.wpss_panel_'.concat(current);if(!$(panel,context).hasClass('wpss-fields-panel')){if($.inArray(panel,answered_panels)==-1){answered_panels.push(panel)}
$(".wpss_next",context).removeAttr("disabled").removeClass('wpss_disabled')}});$("textarea, input[type='text']",context).keydown(function(){panel='.wpss_panel_'.concat(current);if(!$(panel,context).hasClass('wpss-fields-panel')){if($.inArray(panel,answered_panels)==-1){answered_panels.push(panel)}
$(".wpss_next",context).removeAttr("disabled").removeClass('wpss_disabled')}})}}(jQuery))
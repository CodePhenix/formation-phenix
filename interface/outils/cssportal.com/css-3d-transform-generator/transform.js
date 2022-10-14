function transformIt() {

	scaleX = document.getElementById("scalex").innerHTML;
	scaleY = document.getElementById("scaley").innerHTML;
	scaleZ = document.getElementById("scalez").innerHTML;
	rotateX = document.getElementById("rotatex").innerHTML + "deg";
	rotateY = document.getElementById("rotatey").innerHTML + "deg";
	rotateZ = document.getElementById("rotatez").innerHTML + "deg";
	translateX = document.getElementById("translatex").innerHTML + "px";
	translateY = document.getElementById("translatey").innerHTML + "px";
	translateZ = document.getElementById("translatez").innerHTML + "px";
	skewX = document.getElementById("skewx").innerHTML + "deg";
	skewY = document.getElementById("skewy").innerHTML + "deg";
	perspective = document.getElementById("perspective").innerHTML + "px";
	perspectiveX = document.getElementById("perspectiveoriginx").innerHTML + "%";
	perspectiveY = document.getElementById("perspectiveoriginy").innerHTML + "%";
	
	var storeCode;
	if (document.getElementById("shorthand").checked==true) {
		storeCode = ' scale3d('+scaleX+', '+scaleY+', '+scaleZ+')';
	}else{
		storeCode = ' scaleX('+scaleX+')';
		storeCode += ' scaleY('+scaleY+')';
		storeCode += ' scaleZ('+scaleZ+')';
	}
	storeCode += ' rotateX('+rotateX+')';
	storeCode += ' rotateY('+rotateY+')';
	storeCode += ' rotateZ('+rotateZ+')';
	if (document.getElementById("shorthand").checked==true) {
		storeCode += ' translate3d('+translateX+', '+translateY+', '+translateZ+')';
	}else{
		storeCode += ' translateX('+translateX+')';
		storeCode += ' translateY('+translateY+')';
		storeCode += ' translateZ('+translateZ+')';
	}
	if (document.getElementById("shorthand").checked==true) {
		storeCode += ' skew('+skewX+', '+skewY+')';
	}else{
		storeCode += ' skewX('+skewX+')';
		storeCode += ' skewY('+skewY+')';
	}	

	//if (document.getElementById("prefixes").checked==true) {
	//	this.css = '.transform {\n';
	//	this.css += '  -webkit-transform:';
	//	this.css += storeCode;
	//	this.css += ';\n';
	//	this.css += '  -moz-transform:';
	//	this.css += storeCode;
	//	this.css += ';\n';
	//	this.css += '  -o-transform:';
	//	this.css += storeCode;
	//	this.css += ';\n';
	//	this.css += '  -ms-transform:';
	//	this.css += storeCode;
	//	this.css += ';\n';
	//	this.css += '  transform:';
	//	this.css += storeCode;
	//	this.css += ';\n';
	//}else{
		this.css = '.cube {\n';
		this.css += '  transform:';
		this.css += storeCode;
		this.css += ';\n';
	//}
	this.css += '}\n';
	this.css += '.cube-wrap {\n';
	//if (document.getElementById("prefixes").checked==true) {
	//	this.css += '  -webkit-perspective: '+perspective+';\n';
	//	this.css += '  perspective: '+perspective+';\n';
	//	this.css += '  -webkit-perspective-origin: '+perspectiveX+' '+perspectiveY+';\n';
	//	this.css += '  perspective-origin: '+perspectiveX+' '+perspectiveY+';\n';
	//}else{
		this.css += '  perspective: '+perspective+';\n';
		this.css += '  perspective-origin: '+perspectiveX+' '+perspectiveY+';\n';		
	//}
	this.css += '}';

	codeDiv=document.getElementById("code");
			
	codeDiv.textContent=this.css
	Prism.highlightAll();

	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');
	return this.css;	
	
}

function resetvalues() {
	$(".form-range[data-key='scalex']").val('1');$("#scalex").text('1');
	$(".form-range[data-key='scaley']").val('1');$("#scaley").text('1');
	$(".form-range[data-key='scalez']").val('1');$("#scalez").text('1');
	$(".form-range[data-key='rotatex']").val('0');$("#rotatex").text('0');
	$(".form-range[data-key='rotatey']").val('0');$("#rotatey").text('0');
	$(".form-range[data-key='rotatez']").val('0');$("#rotatez").text('0');
	$(".form-range[data-key='translatex']").val('0');$("#translatex").text('0');
	$(".form-range[data-key='translatey']").val('0');$("#translatey").text('0');
	$(".form-range[data-key='translatez']").val('0');$("#translatez").text('0');
	$(".form-range[data-key='skewx']").val('0');$("#skewx").text('0');
	$(".form-range[data-key='skewy']").val('0');$("#skewy").text('0');
	$(".form-range[data-key='perspective']").val('1000');$("#perspective").text('1000');
	$(".form-range[data-key='perspectiveoriginx']").val('50');$("#perspectiveoriginx").text('50');
	$(".form-range[data-key='perspectiveoriginy']").val('50');$("#perspectiveoriginy").text('50');
	transformIt();
}


$(function() {
	$('#spinit').change(function(){
		if($(this).is(":checked")) {
			$('.cube-wrap').addClass("spincube");
		} else {
			$('.cube-wrap').removeClass("spincube");
		}
	});
});

var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.form-range');
    
  slider.each(function(){
    range.on('input', function(){
	  var range__input = $(this).data('key');
      $('#'+range__input).html(this.value);
	  transformIt();
    });
  });
};

rangeSlider();
window.onload=transformIt;
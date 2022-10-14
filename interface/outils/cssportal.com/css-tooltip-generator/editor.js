function updateDisplay() {

	borderRadius = document.getElementById("border-radius").innerHTML + "px";
	backgroundColor = document.getElementById("b-color").value;
	textColor = document.getElementById("t-color").value;
	tipPaddingTB = document.getElementById("tip-paddingTB").innerHTML + "px";
	tipPaddingLR = document.getElementById("tip-paddingLR").innerHTML + "px";
	boxShadowH = document.getElementById("box-h-length").innerHTML;
	boxShadowV = document.getElementById("box-v-length").innerHTML;
	boxShadowB = document.getElementById("box-b-length").innerHTML;
	boxShadowColor = document.getElementById("box-s-color").value;
	textShadowH = document.getElementById("text-h-length").innerHTML;
	textShadowV = document.getElementById("text-v-length").innerHTML;
	textShadowB = document.getElementById("text-b-length").innerHTML;
	textShadowColor = document.getElementById("text-s-color").value;

	arrowPosition = document.querySelector('input[name="tipPosition"]:checked').value;
	$('#demo-tooltip').attr('data-flow', arrowPosition)
	$('#htmlcode').text('<span data-tooltip="Tooltip help here!" data-flow="' + arrowPosition + '">CSS Tooltips</span>');





	this.css = '[data-tooltip] {\n';
	this.css += '  position: relative;\n';
	this.css += '  cursor: pointer;\n';
	this.css += '}\n';

	this.css += '[data-tooltip]:before,\n';
	this.css += '[data-tooltip]:after {\n';
	this.css += '  line-height: 1;\n';
	this.css += '  font-size: .9em;\n';
	this.css += '  pointer-events: none;\n';
	this.css += '  position: absolute;\n';
	this.css += '  box-sizing: border-box;\n';
	this.css += '  display: none;\n';
	this.css += '  opacity: 0;\n';
	if (boxShadowH > "0" || boxShadowV > "0" || boxShadowB > "0") {
		this.css += '  filter: drop-shadow('+boxShadowH+'px '+boxShadowV+'px '+boxShadowB+'px '+boxShadowColor+');\n';
	}
	this.css += '}\n';

	this.css += '[data-tooltip]:before {\n';
	this.css += '  content: "";\n';
	this.css += '  border: 5px solid transparent;\n';
	this.css += '  z-index: 100;\n';
	this.css += '}\n';

	this.css += '[data-tooltip]:after {\n';
	this.css += '  content: attr(data-tooltip);\n';
	this.css += '  text-align: center;\n';
	this.css += '  min-width: 3em;\n';
	this.css += '  max-width: 21em;\n';
	this.css += '  white-space: nowrap;\n';
	this.css += '  overflow: hidden;\n';
	this.css += '  text-overflow: ellipsis;\n';
	this.css += '  padding: ' + tipPaddingTB + ' ' + tipPaddingLR +';\n';
	this.css += '  border-radius: ' + borderRadius + ';\n';
	this.css += '  background: ' + backgroundColor + ';\n';
	this.css += '  color: ' + textColor + ';\n';
	this.css += '  z-index: 99;\n';
	if (textShadowH > "0" || textShadowV > "0" || textShadowB > "0") {
		this.css += '  text-shadow: '+textShadowH+'px '+textShadowV+'px '+textShadowB+'px '+textShadowColor+';\n';
	}
	this.css += '}\n';

	this.css += '[data-tooltip]:hover:before,\n';
	this.css += '[data-tooltip]:hover:after {\n';
	this.css += '  display: block;\n';
	this.css += '  opacity: 1;\n';
	this.css += '}\n';

	this.css += '[data-tooltip]:not([data-flow])::before,\n';
	this.css += '[data-tooltip][data-flow="top"]::before {\n';
	this.css += '  bottom: 100%;\n';
	this.css += '  border-bottom-width: 0;\n';
	this.css += '  border-top-color: ' + backgroundColor + ';\n';
	this.css += '}\n';
	this.css += '[data-tooltip]:not([data-flow])::after,\n';
	this.css += '[data-tooltip][data-flow="top"]::after {\n';
	this.css += '  bottom: calc(100% + 5px);\n';
	this.css += '}\n';
	this.css += '[data-tooltip]:not([data-flow])::before, [tooltip]:not([data-flow])::after,\n';
	this.css += '[data-tooltip][data-flow="top"]::before,\n';
	this.css += '[data-tooltip][data-flow="top"]::after {\n';
	this.css += '  left: 50%;\n';
	this.css += '  -webkit-transform: translate(-50%, -4px);\n';
	this.css += '          transform: translate(-50%, -4px);\n';
	this.css += '}\n';
	//BOTTOM
	this.css += '[data-tooltip][data-flow="bottom"]::before {\n';
	this.css += '  top: 100%;\n';
	this.css += '  border-top-width: 0;\n';
	this.css += '  border-bottom-color: ' + backgroundColor + ';\n';
	this.css += '}\n';
	this.css += '[data-tooltip][data-flow="bottom"]::after {\n';
	this.css += '  top: calc(100% + 5px);\n';
	this.css += '}\n';
	this.css += '[data-tooltip][data-flow="bottom"]::before, [data-tooltip][data-flow="bottom"]::after {\n';
	this.css += '  left: 50%;\n';
	this.css += '  -webkit-transform: translate(-50%, 8px);\n';
	this.css += '          transform: translate(-50%, 8px);\n';
	this.css += '}\n';
	//LEFT
	this.css += '[data-tooltip][data-flow="left"]::before {\n';
	this.css += '  top: 50%;\n';
	this.css += '  border-right-width: 0;\n';
	this.css += '  border-left-color: ' + backgroundColor + ';\n';
	this.css += '  left: calc(0em - 5px);\n';
	this.css += '  -webkit-transform: translate(-8px, -50%);\n';
	this.css += '          transform: translate(-8px, -50%);\n';
	this.css += '}\n';
	this.css += '[data-tooltip][data-flow="left"]::after {\n';
	this.css += '  top: 50%;\n';
	this.css += '  right: calc(100% + 5px);\n';
	this.css += '  -webkit-transform: translate(-8px, -50%);\n';
	this.css += '          transform: translate(-8px, -50%);\n';
	this.css += '}\n';
	//RIGHT
	this.css += '[data-tooltip][data-flow="right"]::before {\n';
	this.css += '  top: 50%;\n';
	this.css += '  border-left-width: 0;\n';
	this.css += '  border-right-color: ' + backgroundColor + ';\n';
	this.css += '  right: calc(0em - 5px);\n';
	this.css += '  -webkit-transform: translate(8px, -50%);\n';
	this.css += '          transform: translate(8px, -50%);\n';
	this.css += '}\n';
	this.css += '[data-tooltip][data-flow="right"]::after {\n';
	this.css += '  top: 50%;\n';
	this.css += '  left: calc(100% + 5px);\n';
	this.css += '  -webkit-transform: translate(8px, -50%);\n';
	this.css += '          transform: translate(8px, -50%);\n';
	this.css += '}\n';

	this.css += '[data-tooltip=""]::after, [data-tooltip=""]::before {\n';
	this.css += '  display: none !important;\n';
	this.css += '}\n';
			
	document.getElementById("code").textContent = this.css
	Prism.highlightAll();

	$('style').remove();
	$('head').append('<style type="text/css">' + this.css + '</style>');

	if (document.getElementById("showtooltip").checked==true) {
		this.css1 = '[data-tooltip]:before,\n';
		this.css1 += '[data-tooltip]:after {\n';
		this.css1 += '  display: block;\n';
		this.css1 += '  opacity: 1;\n';
		this.css1 += '}\n';	
		$('head').append('<style type="text/css">' + this.css1 + '</style>');
	}

	return this.css;

	}
	var rangeSlider = function(){
	  var slider = $('.range-slider'),
		  range = $('.form-range');
		
	  slider.each(function(){
		range.on('input', function(){
		  var range__input = $(this).data('key');
		  $('#'+range__input).html(this.value);
		  updateDisplay();
		});
	  });
	};

	rangeSlider();

	window.onload = updateDisplay;

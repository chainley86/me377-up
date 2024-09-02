// Drop Button
function BtnKbd10_btn_onMouseClick(me, eventInfo)
{
    slide("wgts2", "y", 4000, fps, "easeOutBounce");
}

// Reset Drop Button
function BtnKbd1_btn_onMouseClick(me, eventInfo)
{
    var shape = page.getWidget("rect8");
	shape.x = 30;
	shape.y = 90;     	
}

// Swap Button
function BtnKbd2_btn_onMouseClick(me, eventInfo)
{
	swap("wgts1", "x", 3000, fps, "linear");    
}

// Move Up Button
function BtnKbd3_btn_onMouseClick(me, eventInfo)
{
    var shape = page.getWidget("carImg");
	if (shape.y > 240) {
		shape.y = shape.y - 5;
	} else {
		alert("You reach the Upper limit!");
	}    
}

// Move Down Button
function BtnKbd6_btn_onMouseClick(me, eventInfo)
{
    var shape = page.getWidget("carImg");
	if (shape.y < 420) {
		shape.y = shape.y + 5;
	} else {
		alert("You reach the lower limit!");
	}    
}

// Move Left Button
function BtnKbd5_btn_onMouseClick(me, eventInfo)
{
    var shape = page.getWidget("carImg");
	if (shape.x > 225) {
		shape.x = shape.x - 5;
	} else {
		alert("You reach the left limit!");
	}    
}

// Move Right Button
function BtnKbd4_btn_onMouseClick(me, eventInfo)
{
    var shape = page.getWidget("carImg");
	if (shape.x < 550) {
		shape.x = shape.x + 5;
	} else {
		alert("You reach the right limit!");
	}    
}

// Pan Action to Move the car base on touch
function MoveCar(me, eventInfo)
{
    var movedx = page.primaryTouch.x;
    var movedy = page.primaryTouch.y;
    var shape = page.getWidget("carImg");
    if ((movedx < 550) && (movedx > 225 ) && (movedy < 420) && (movedy > 240)){
        shape.x = movedx;
        shape.y = movedy;
    } else if (movedx > 550){
        shape.x = 550;
    } else if (movedx < 225){
        shape.x = 225;
    } else if (movedy > 420){
        shape.y = 420;
    } else if (movedy < 240){
        shape.y = 240;
    }
}

// Global variables 
var duration=3000;
var fps=10;
var wgts1 = [ 
		{"id":"rect5"},
		{"id":"rect6"}
	];

var wgts2 = [ 
		{"id":"rect8", "end":395}
	];

function innerChangeWidth(wgts, frame, change, totalframes, prop, easing, swap) {

	linear = function (t, b, c, d) {
		var m = c / d;
		var a = t / d;
		return m * t + b;
	};
	
	EaseInQuad = function (t, b, c, d) {
		return c * (t /= d) * t + b;
	};
	easeOutQuad = function (t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	};
	easeInOutQuad = function (t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	};
	easeInCubic = function (t, b, c, d) {
		return c * (t /= d) * t * t + b;
	};
	easeOutCubic = function (t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	};
	easeInOutCubic = function (t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	};
	easeInQuart = function (t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	};
	easeOutQuart = function (t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	};
	easeInOutQuart = function (t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	};
	easeInQuint = function (t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	};
	easeOutQuint = function (t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	};
	easeInOutQuint = function (t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	};
	easeInSine = function (t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	};
	easeOutSine = function (t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	};
	easeInOutSine = function (t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	};
	easeInExpo = function (t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	};
	easeOutExpo = function (t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	};
	easeInOutExpo = function (t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	};
	easeInCirc = function (t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	};
	easeOutCirc = function (t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	};
	easeInOutCirc = function (t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	};
	//a: amplitude (optional), p: period (optional)
	easeInElastic = function (t, b, c, d, a, p) {
		if (t == 0) {
			return b;
		}
		if ((t /= d) == 1) {
			return b + c;
		}
		if (!p) {
			p = d * .3;
		}
		if (a < Math.abs(c)) {
			a = c;
			s = p / 4;
		} else {
			a = Math.abs(c);
			s = p / (2 * Math.PI) * Math.asin(c / a);
		}
	
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	};
	easeOutElastic = function (t, b, c, d, a, p) {
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			a = Math.abs(c);
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	};
	easeInOutElastic = function (t, b, c, d, a, p) {
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			a = Math.abs(c);
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		if (t < 1) {
			return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	};
	easeInBack = function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	};
	easeOutBack = function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	};
	easeInOutBack = function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	};
	easeInBounce = function (t, b, c, d) {
		return c - easeOutBounce(d - t, 0, c, d) + b;
	};
	easeOutBounce = function (t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	};
	easeInOutBounce = function (t, b, c, d) {
		if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * .5 + b;
		return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	};

	var s=eval(easing);
	var w = eval(wgts);
	
	var increase=s(frame, w[0].begin, change, totalframes);
	var wgt = page.getWidget(w[0].id);
	wgt[prop] = increase;
	
	if (swap) {
		increase=s(frame, w[1].begin, -change, totalframes);
		wgt = page.getWidget(w[1].id);
		wgt[prop] = increase;
	}
}

function swap(wgts, prop, duration, fps, easing) {

	if(!duration) duration = 1000;
	if(!fps) fps = 30;
	var swap = 1;

	duration = parseFloat(duration);
	fps      = parseFloat(fps);
	
	var w = eval(wgts);
	var wgt1 = page.getWidget(w[0].id);
	var wgt2 = page.getWidget(w[1].id);
	
	w[0].begin = wgt1[prop];
	w[0].end = wgt2[prop];
	w[1].begin = wgt2[prop];
	w[1].end = wgt1[prop];

	var change = wgt2[prop]-wgt1[prop];
	var interval = Math.ceil(1000/fps);
	var totalframes = Math.ceil(duration/interval);
	var step = change/totalframes;

	for(i=1;i <= totalframes;i++) {
		 (function() {
			var frame=i;
			timer = page.setTimeout('innerChangeWidth("' + wgts + '",' + i + ',' + change + ',' + totalframes + ',"' + prop + '","' + easing + '",' + swap + ')', interval*frame);
		})();
	}
}

function slide(wgts, prop, duration, fps, easing) {

	if(!duration) duration = 1000;
	if(!fps) fps = 30;
	var swap = 0;

	duration = parseFloat(duration);
	fps  = parseFloat(fps);
	
	var w = eval(wgts);
	var wgt1 = page.getWidget(w[0].id);
	
	w[0].begin = wgt1[prop];
	//w[0].end = wgt1[prop];

	var change = w[0].end-w[0].begin;
	var interval = Math.ceil(1000/fps);
	var totalframes = Math.ceil(duration/interval);
	var step = change/totalframes;

	for(i=1;i <= totalframes;i++) {
		 (function() {
			var frame=i;
			timer = page.setTimeout('innerChangeWidth("' + wgts + '",' + i + ',' + change + ',' + totalframes + ',"' + prop + '","' + easing + '",' + swap + ')', interval*frame);
		})();
	}
}

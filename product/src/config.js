// localhost
global.STATIC_PATH = '/';
global.ROUTER_PATH = '/api/resume';

// production
// global.STATIC_PATH = '/resume/';
// global.ROUTER_PATH = '';

//自动设置font-size的值
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 40 * (clientWidth / 640) + 'px';
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// localhost
global.STATIC_PATH = '/'; //静态资源目录
global.API_PATH = '/api/resume'; //请求接口目录
global.ROUTER_PATH = __dirname; //路由目录

// production
// global.STATIC_PATH = '/resume/'; //静态资源目录
// global.API_PATH = ''; //请求接口目录
// global.ROUTER_PATH = ''; //路由目录

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


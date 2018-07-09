jQuery(function() {
	// 绑定滚动事件
	jQuery(window).bind("scroll", moveSidebar);
	// 窗口调整大小后重新计算sidebar的位置
	jQuery(window).bind("resize", function() {
		initRightbar();
		moveSidebar();
	});
	// 初始化
	initRightbar();
	moveSidebar();
	// 根据滚动条调整sidebar的显示
	function moveSidebar() {
		var clientHeight = jQuery(window).height();
		if (jQuery(window).scrollTop() >= clientHeight) {
			jQuery("#sidebar").show("100");
			jQuery("#sidebarRight").show();
			jQuery("#bbb").css("width", "110px");
		} else {
			jQuery("#sidebar").hide("100");
			jQuery("#sidebarRight").hide();
			if(document.getElementById('sidebar')){
				document.getElementById('sidebar').style.width = '110px';
				document.getElementById('sidebar').style.height = '306px';
			}
			if(document.getElementById('daogou_box')){
				document.getElementById('daogou_box').style.display = 'block';
				document.getElementById('daogou_xin').style.display = 'none';
			}
		}
	}

	// 初始化右边栏的位置
	function initRightbar() {
		var clientHeight = jQuery(window).height();
		var topHeight = clientHeight - 270;
		jQuery("#sidebarRight").css("top", topHeight);
	}

	// 焦点图
	jQuery('#ei-slider').eislideshow({
		easing : 'easeOutExpo',
		titleeasing : 'easeOutExpo',
		titlespeed : 1200
	});

	// 最新动态
	var newsListTimer = null, newsList = jQuery("#newsList").hover(function() {
		clearInterval(newsListTimer);
	}, function() {
		autoChgNews();
	}), _h = newsList.find("dd").outerHeight(), newsListLength = newsList
			.find("dd").length;
	function autoChgNews() {
		if (newsListLength <= 1) {
			return;
		}
		newsListTimer = setInterval(function() {
			newsList.find("dd:first").animate({
				marginTop : -_h
			}, function() {
				jQuery(this).appendTo(newsList).css({
					"margin-top" : 0
				})
			});
		}, 5000);
	}

	autoChgNews();

});

function yincang() {
	if(document.getElementById('sidebar')){
		document.getElementById('sidebar').style.width = '23px';
		document.getElementById('sidebar').style.height = '82px';
	}
	if(document.getElementById('daogou_box')){
	    document.getElementById('daogou_box').style.display = 'none';
	    document.getElementById('daogou_xin').style.display = 'block';
	}

}
function xianshi() {
	if(document.getElementById('sidebar')){
		document.getElementById('sidebar').style.width = '110px';
		document.getElementById('sidebar').style.height = '306px';
	}
	if(document.getElementById('daogou_box')){
	    document.getElementById('daogou_box').style.display = 'block';
	    document.getElementById('daogou_xin').style.display = 'none';
	}
}
var details = (function() {
	//获取所有小图
	var allsamll_pic = document.querySelectorAll(".samll");
	//获取中图
	var mid_pic = document.querySelector(".midle_pic");
	//获取大图
	var lg_pic = document.querySelector(".lg_pic");
	//获取放大镜
	var fiter = document.querySelector(".filter");
	//获取中图的盒子
	var mid_box = document.querySelector(".midbox");
	//获取大图盒子
	var max_box = document.querySelector(".maxbox");

	var goodsList = document.querySelector(".goods_list");
	var go_top = document.querySelector(".goTop");
	return {
		init() {
			this.event();
		},
		event() {
			//遍历小图：
			for(var i = 0; i < allsamll_pic.length; i++) {
				allsamll_pic[i].onmouseover = function() {
					var src = this.getAttribute("data-url");
					mid_pic.src = src;
					lg_pic.src = src;
				}
			}
			//鼠标移入中图区域： 放大镜 ，大图显示，放大镜及大图随鼠标移动
			mid_box.onmouseover = function() {
				fiter.style.display = "block";
				max_box.style.display = "block";
				this.onmousemove = function(e) {
					var e = e || event;
					var l = e.clientX - mid_box.offsetLeft - goodsList.offsetLeft - fiter.offsetWidth / 2;
					var t = e.clientY - mid_box.offsetTop - goodsList.offsetTop - fiter.offsetHeight / 2;

					if(l > mid_box.offsetWidth - fiter.offsetWidth) {
						l = mid_box.offsetWidth - fiter.offsetWidth;
					}
					if(t > mid_box.offsetHeight - fiter.offsetHeight) {
						t = mid_box.offsetHeight - fiter.offsetHeight;
					}
					if(l < 0) {
						l = 0;
					}
					if(t < 0) {
						t = 0;
					}
					fiter.style.left = l + "px";
					fiter.style.top = t + "px";

					lg_pic.style.left = -2 * l + "px";
					lg_pic.style.top = -2 * t + "px";
				}
			}
			//鼠标移出放大镜和大图隐藏
			mid_box.onmouseout = function() {
				fiter.style.display = "none";
				max_box.style.display = "none";
			}
			//鼠标移入导航条 图片切换
			$(".fix_nav").on("mouseenter", ">div", function() {
				var index = $(this).index();
				$(this).children("a").css({
					"display": "none"
				}).siblings().css({
					"display": "block"
				});
			})
			$(".fix_nav").on("mouseleave", ">div", function() {
				var index = $(this).index();
				$(this).children("a").css({
					"display": "block"
				}).siblings().css({
					"display": "none"
				});
			})
			//回到顶部
			go_top.onclick = function() {
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			}
			//滚动条滚动时商品详情、售后服务、用户评价固定
			window.onscroll = function(){
				var scroll_t = document.documentElement.scrollTop;
				var selector = document.querySelector(".selector");
				if(scroll_t>702){
					selector.style.position = "fixed";
					selector.style.top = "0";
					selector.style.zIndex = "999";
				}else{
					selector.style.position = "static";
				}
			}
		}
	}
})()
details.init()
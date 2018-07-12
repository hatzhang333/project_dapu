//轮播图
var fade = (function() {
	//获取图片盒子
	var $box = $(".imgbox");
	//获取小圆点盒子
	var $circleBox = $(".circle");
	//声明一个定时器
	var timer = null;
	//声明一个起始下标
	var index = 0;
	//获取回到顶部按钮
	var go_top = document.querySelector(".go");
	//返回一个对象：
	return {
		//初始化的函数：
		init() {
			//调用事件函数
			this.events();
			//调用自动播放函数
			this.autoPlay();
		},
		//图片展示的函数：
		showImg() {
			//给选中的小圆点添加class名  给它的其他兄弟元素删除class名
			$circleBox.children("a").eq(index).addClass("active").siblings().removeClass("active");
			//让小圆点下标对应的图片淡入  它的其他兄弟元素淡出
			$box.children("img").eq(index).fadeIn().siblings().fadeOut();
		},
		//自动播放的函数：
		autoPlay() {
			//声明一个变量接收this
			var _this = this;
			//关闭定时器
			clearInterval(timer);
			//开启定时器
			timer = setInterval(function() {
				//初始下标加加
				index++;
				//如果下标为图片的个数   就让下标为0 调用图片展示的方法
				if(index == $box.children("img").length) {
					index = 0;
				}
				_this.showImg();
			}, 2000)

		},
		//事件函数：
		events() {
			//声明一个变量接收this
			var _this = this;
			//给小圆点添加点击事件
			$circleBox.children("a").on("click", function() {
				//获取当前点击的小圆点的下标
				index = $(this).index();
				//调用图片展示  自动播放的函数
				_this.showImg();
				_this.autoPlay();
			})
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
			
		}
	}
})()

fade.init();
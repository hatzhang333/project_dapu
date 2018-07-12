var login = (function() {
	//获取用户名 密码的文本框    错误提示框
	var name_inp = document.querySelector(".username");
	var pass_inp = document.querySelector(".pwd");
	var name_tips = document.querySelector(".name_tips");
	var pass_tips = document.querySelector(".pass_tips");
	//获取登录按钮
	var loginBtn = document.querySelector(".login_btn");
	return {
		init() {
			this.event();
		},
		//事件函数
		event() {
			//登录
			name_inp.onblur = function() {
				var name_val = name_inp.value;
				var reg = /^\w{1,}$/;
				if(reg.test(name_val)) {
					name_tips.style.display = "none";
					return true;
				} else {
					name_tips.style.display = "inline-block";
				}
			}
			pass_inp.onblur = function() {
				var pass_val = pass_inp.value;
				var reg = /^\w{6,16}$/;
				if(reg.test(pass_val)) {
					pass_tips.style.display = "none";
					return true;
				} else {
					pass_tips.style.display = "inline-block";
				}
			}
			loginBtn.onclick = function() {
				if(name_inp.onblur() == true && pass_inp.onblur() == true) {
					location.href = "index.html"
				} else {
					alert("请重新输入")
				}
			}
		}

	}
})()

login.init();
var signin = (function() {
	//获取手机号文本框
	var phone_inp = document.getElementById("phone_num");
	//获取随机码
	var num_random = document.querySelector(".num_random");
	//获取随机码输入框
	var pic_inp = document.querySelector(".picinp");
	//获取短信码输入框
	var msg_inp = document.querySelector(".msginp");
	//获取密码框
	var pwd_inp = document.querySelector(".pwdinp");
	//获取确认密码框
	var pwd_inp2 = document.querySelector(".pwd_inp");
	//获取错误提示
	var tips1 = document.querySelector(".tips1");
	var tips3 = document.querySelector(".tips3");
	var tips4 = document.querySelector(".tips4");
	//获取密码强度提示框
	var danger_tips = document.querySelector(".danger");
	var medium_tips = document.querySelector(".medium");
	var safe_tips = document.querySelector(".safe");
	//获取注册按钮
	var signBtn = document.getElementById("sign_btn");
	return {
		init() {
			this.event();
		},
		event() {
			//验证手机号
			phone_inp.onblur = function() {
				var phone_val = phone_inp.value;
				var reg = /^(13|15|17|18|19)\d{9}$/;
				if(reg.test(phone_val)) {
					tips1.style.display = "none";
					return true;
				} else {
					tips1.style.display = "inline-block";
				}
			}
			//获取验证随机码
			pic_inp.onfocus = function() {
				var str = ''
				for(var i = 0; i < 4; i++) {
					str += parseInt(Math.random() * 10);
				}
				num_random.value = str;
				num_random.style.display = "inline-block";
				//验证随机码
				pic_inp.onblur = function() {
					var pic_val = pic_inp.value;
					if(pic_val != str) {
						tips4.style.display = "inline-block";
					} else {
						tips4.style.display = "none";
						return true;
					}
				}
			}
			//验证密码
			/*pwd_inp.oninput = function(){
				console.log(111)
				var pwd_val = pwd_inp.value;
				var reg1 = /^\d{6,}$/;
				var reg2 = /^\w{6,}$/;
				var reg3 = /^[0-9A-Za-z]\w{6,}$/;
				console.log(reg2.test(pwd_val))
				if(reg1.test(pwd_val)){
					$(".danger").css({"color":"#f9161b"});
					danger_tips.style.color = "#f9161b";
				}else if(reg2.test(pwd_val)){
					danger_tips.style.color = "#f9b616";
				}else if(reg3.test(pwd_val)){
					danger_tips.style.color = "#2bb82b";
				}
				//确认密码
				pwd_inp2.onblur = function(){
					var pwd_val2 = pwd_inp2.value;
					if(pwd_val2!=pwd_val){
						tips3.style.display  = "inline-block";
					}
				}
			}*/
			//验证密码
			pwd_inp.oninput = function() {
				var pwd_val = pwd_inp.value;
				var reg = /^[0-9A-Za-z]\w{6,}$/;
				if(pwd_val.length < 6) {
					danger_tips.style.color = "#f9161b";
				} else if(pwd_val.length > 6 && pwd_val.length < 10) {
					danger_tips.style.color = "#f9b616";
				} else if(pwd_val.length > 10) {
					danger_tips.style.color = "#2bb82b";
				}
				return true;
			}
			//确认密码
			pwd_inp2.onblur = function() {
				var pwd_val = pwd_inp.value;
				var pwd_val2 = pwd_inp2.value;
				if(pwd_val2 != pwd_val) {
					tips3.style.display = "inline-block";
				} else {
					return true;
				}
			}
			//提交注册
			signBtn.onclick = function() {
				if(phone_inp.onblur() == true && phone_inp.onblur() == true && pwd_inp.oninput() == true && pwd_inp2.onblur() == true) {
					location.href = "index.html"
				}else{
					alert("请重新输入")
				}
			}

		}
	}

})()
signin.init();
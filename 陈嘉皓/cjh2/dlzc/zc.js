var email = document.getElementById("email");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");
var yx1 = document.getElementById("yx1");
var mm1 = document.getElementById("mm1");
var qdmm1 = document.getElementById("qdmm1");
var btn = document.getElementById("btn");
var einfo = null;//存储邮箱
var pinfo = null;//存储密码
var success = document.getElementById("success");

//邮箱
var re1 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
email.onblur = function () {
    if (re1.test(email.value)) {
        if (email.value === getCookie("email")) {
            yx1.innerHTML = "该邮箱已被注册，请直接登录";
            yx1.style.color = "red";
        } else if (email.value !== getCookie("email")) {
            yx1.innerHTML = "邮箱可用";
            yx1.style.color = "green";
            einfo = email.value;
        }
    } else {
        yx1.innerHTML = "邮箱格式不正确";
        yx1.style.color = "red";
    }
}
//密码
var re2 = /^[a-zA-Z0-9]{8,16}$/;
password1.onblur = function () {
    if (re2.test(password1.value)) {
        mm1.innerHTML = "密码可用";
        mm1.style.color = "green";

    } else {
        mm1.innerHTML = "密码格式不正确";
        mm1.style.color = "red";
    }
}
password2.onblur = function () {
    if (re2.test(password2.value)) {
        if (password2.value === password1.value) {
            qdmm1.innerHTML = "两次输入密码一致";
            qdmm1.style.color = "green";
            pinfo = password2.value;
        } else {
            qdmm1.innerHTML = "两次输入密码不一致";
            qdmm1.style.color = "red";
        }
    } else {
        qdmm1.innerHTML = "密码格式不正确";
        qdmm1.style.color = "red";
    }
}

//点击注册存储cookie
btn.onclick = function () {
    if (einfo !== null && pinfo !== null) {
        // console.log(einfo,pinfo);
        setCookie("email", einfo, 3);
        setCookie("pwd", pinfo, 3);
        login();
    }
}
function login() {
    setTimeout(function () {
        location.assign("dl.html");
    }, 3000);
}

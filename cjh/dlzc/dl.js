var random_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var email = document.getElementById("email");
var pwd = document.getElementById("password");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var txt = document.getElementById("txt");
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var success = document.getElementById("success");
var a = "";//设置一个空字符串来接收生成的字符
var einfo;
var pinfo;
var test;

//获取验证码
btn2.onclick = function () {
    var time = 4;
    function fn() {
        if (time === 0) {
            btn2.removeAttribute("disabled");
            btn2.value = "点击获取验证码";
            time = 4;
        } else {
            btn2.setAttribute("disabled", true);
            btn2.value = time + "s后可再次获取";
            time = time - 1;
            setTimeout(fn, 1000);
        }
    }
    fn();

    for (var i = 0; i < 4; i++) {
        var b = Math.floor(Math.random() * 36);
        a = a + random_arr[b];
    }
    alert(a);
    setCookie("a",a,3);
    a="";//将a清空
}

//验证码验证
txt.onblur = function (){
    if (txt.value === ""){
        s3.innerHTML = "验证码不能为空";
        s3.style.display = "block";
        s3.style.color = "red";
    }else if (txt.value !== getCookie("a")){
        s3.innerHTML = "验证码不正确";
        s3.style.display = "block";
        s3.style.color = "red";
    }else {
        s3.innerHTML = "验证码正确";
        s3.style.color = "green";
        s3.style.display = "block";
        test = 1;
    }
}

//邮箱验证
email.onblur = function (){
    if (email.value === ""){
        s1.innerHTML = "邮箱不能为空";
        s1.style.display = "block";
        s1.style.color = "red";
    }else if (email.value === getCookie("email")){
        einfo = 1;
        s1.style.display = "none";
    }else {
        s1.style.display = "none";
    }
    console.log(einfo)
}

//密码验证
pwd.onblur = function (){
    console.log(getCookie("pwd"))
    console.log(pwd.value)
    if (pwd.value === ""){
        s2.innerHTML = "密码不能为空";
        s2.style.display = "block";
        s2.style.color = "red";
    }else if (pwd.value === getCookie("pwd")){

        pinfo = 1;
        s2.style.display = "none";
    }else {
        s2.style.display = "none";
    }
}

//登录验证
btn1.onclick = function (){
    console.log(einfo)
    console.log(pinfo)
    console.log(test)
    if (einfo == 1 && pinfo == 1 && test == 1) {
        login();
    }else {
        s2.innerHTML = "账号和密码不符或验证码错误，请重新输入";
        s2.style.display = "block";
    }
}

function login() {
    
    setTimeout(function () {
        location.assign("../cjh/xm/zuipin.html");
    }, 1000);
    let x = getCookie("email");
    localStorage.setItem("yes",x);
}